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

    const $pipeline = [
      $lookupAddress,
      $unwindAddress,
      $match,
    ]
    return $pipeline
  }

  protected matchQueryBuilderWithRegex(patterns: string[], columns = ['fullname', 'position', 'address.name']) {
    let queries: any = []
    for (let pattern of patterns) {
      const $orQuery = columns.map((columnName: string) => {
        const column = {};
        column[columnName] = this.fullTextSearchRegex(pattern);
        return column;
      })
      const sequence = {
        $or: $orQuery
      }

      queries = [...queries, sequence];
    }
    return queries
  }
  protected fullTextSearchRegex(pattern: string): RegExp {
    return new RegExp(`.*${pattern}.*`, 'i');
  }
}
