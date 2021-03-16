package de.tschuehly.datarecoverybackend.repository

import de.tschuehly.datarecoverybackend.model.Customer
import de.tschuehly.datarecoverybackend.model.Order
import de.tschuehly.datarecoverybackend.model.Product
import de.tschuehly.datarecoverybackend.model.User
import org.springframework.data.jpa.repository.JpaRepository

interface OrderRepository : JpaRepository<Order, Long>{
    fun findByTrackingIdAndCustomer_PostalCode(trackingId: String,postalCode: String): Order?
}
interface CustomerRepository : JpaRepository<Customer, Long>
interface ProductRepository : JpaRepository<Product, Long>
interface UserRepository : JpaRepository<User?, Long?> {
    override fun findAll(): List<User?>
    fun findByUsername(name: String): User?
}
