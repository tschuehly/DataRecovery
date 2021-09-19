package de.tschuehly.datarecoverybackend.repository

import de.tschuehly.datarecoverybackend.model.*
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository

interface OrderRepository : JpaRepository<Order, Long>{
    fun findByTrackingIdAndCustomer_PostalCode(trackingId: String,postalCode: String): Order?
    fun findByTrackingStateOrderByOrderDateDesc(trackingState: String, pageable: Pageable): List<Order>
    fun findByTrackingStateNotIn(trackingStateList: List<String>): List<Order>
}
interface CustomerRepository : JpaRepository<Customer, Long>
interface CategoryRepository : JpaRepository<Category, Long>
interface ProductRepository : JpaRepository<Product, Long>
interface OrderProductRepository : JpaRepository<OrderProduct, Long>
interface ReviewRepository : JpaRepository<Review, Long>
interface UserRepository : JpaRepository<WebsiteUser?, Long?> {
    override fun findAll(): List<WebsiteUser?>
    fun findByUsername(name: String): WebsiteUser?
}
