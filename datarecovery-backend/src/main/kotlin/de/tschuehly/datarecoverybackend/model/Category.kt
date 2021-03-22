package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.databind.annotation.JsonSerialize
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Lob

@Entity
class Category (
    var name: String?,
    var title: String?,
    @Column(length = 4000)
    var description: String?,
    var replacement: Boolean?
): BaseEntity(){
    override fun toString(): String {
        return "Category(name='$name', title='$title', description='$description')"
    }
}
