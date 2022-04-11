package de.tschuehly.datarecoverybackend.model

import java.util.*
import javax.persistence.Entity

@Entity
class KeywordRank(
    var keyword: String,
    var url: String?,
    var rank: Int?,
    var requestTime: Date
) : BaseEntity() {
    override fun toString(): String {
        return "KeywordRank(keyword='$keyword', url=$url, rank=$rank, requestTime=$requestTime)"
    }
}
