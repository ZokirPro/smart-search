export default class BaseRepository {
  protected aggregateBuilderForSearch(patterns: string[], columns: string[]) {

    const $match = {
      $match: {
        $or: this.matchQueryBuilderWithRegex(patterns, columns)
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

    const $pipeline = [
      $lookupAddress,
      $unwindAddress,
      $match
    ]

    return $pipeline
  }

  protected matchQueryBuilderWithRegex(patterns: string[], columns: string[]) {
    let queries: any = []
    for (let columnName of columns) {
      for (let pattern of patterns) {
        const column = {};
        column[columnName] = {
          $regex: this.fullTextSearchRegex(pattern)
        };
        queries.push(column)
      }
    }

    return queries
  }
  protected fullTextSearchRegex(pattern: string): RegExp {
    return new RegExp(`.*${pattern}.*`, 'i');
  }
}
