package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.databind.annotation.JsonSerialize
import javax.persistence.*

@Entity
class Category (
    var name: String?,
    var title: String?,
    @Column(length = 4000)
    var description: String?,
    var replacement: Boolean?,
    @ElementCollection
    var questions: MutableList<String> = ArrayList(),
    var sequenceId: Int?
): BaseEntity(){
    override fun toString(): String {
        return "Category(name='$name', title='$title', description='$description')"
    }
}
