package de.tschuehly.datarecoverybackend.model

import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.MappedSuperclass

@MappedSuperclass
abstract class BaseEntity {
    @Id
    @GeneratedValue
    var id: Long? = null
}
