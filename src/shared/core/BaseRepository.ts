export default class BaseRepository {
  protected aggregateBuilderForSearch(patterns: string[]) {

    const $match = {
      $match: {
        $and: this.matchQueryBuilderWithRegex(patterns)
      }
    }

    const $lookupAddress = {
      $lookup: {
        from: 'addresses',
        localField: 'addressId',
        foreignField: '_id',
        as: "address"
      }
    }
    const $unwindAddress = {
      $unwind: {
        path: '$address',
        preserveNullAndEmptyArrays: true
      }
    }

    const $addFields = {
      $addFields: {
        columnForSmartSearch: { $concat: ["$fullname", " ", "$position", " ", "$address.name"] },
      }
    }

    const $project = {
      $project: {
        columnForSmartSearch: 0
      }
    }
    
    const $pipeline = [
      $lookupAddress,
      $unwindAddress,
      $addFields,
      $match,
      $project
    ]
    console.log(JSON.stringify($pipeline));

    return $pipeline
  }

  protected matchQueryBuilderWithRegex(patterns: string[]) {
    let queries: any = []
    for (let pattern of patterns) {
      const columnForSmartSearch = {
        columnForSmartSearch: this.fullTextSearchRegex(pattern) 
      }
      queries.push(columnForSmartSearch)
    }

    return queries
  }
  protected fullTextSearchRegex(pattern: string): RegExp {
    return new RegExp(`.*${pattern}.*`, 'i');
  }
}
