package de.tschuehly.datarecoverybackend

import de.tschuehly.datarecoverybackend.model.Customer
import de.tschuehly.datarecoverybackend.model.Order
import de.tschuehly.datarecoverybackend.model.Product
import de.tschuehly.datarecoverybackend.model.User
import de.tschuehly.datarecoverybackend.repository.CustomerRepository
import de.tschuehly.datarecoverybackend.repository.OrderRepository
import de.tschuehly.datarecoverybackend.repository.ProductRepository
import de.tschuehly.datarecoverybackend.repository.UserRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.transaction.annotation.Transactional
import java.util.*

@SpringBootApplication
class DatarecoveryBackendApplication(val orderRepository: OrderRepository,
									 val productRepository: ProductRepository,
									 val customerRepository: CustomerRepository,
									 val userRepository: UserRepository) : CommandLineRunner{
	@Transactional
	override fun run(vararg args: String?) {
		productRepository.save(Product("HDD","500GB",500.0))
		productRepository.save(Product("SSD","500GB",300.0))
		val customer = Customer("Thomas","Schuehly", "97123871","thomas.schuehly@outlook.com","71638","Ludwigsburg","Kaiserstraße 25")
		orderRepository.save(Order("7fb274bc-f00e-4a97-9496-cd41d399e271", Date(),"Auftrag angekommen",productRepository.findAll()[0],customer,"Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR"))
		userRepository.save(User(1L,"admin","\$2y\$10\$mt1Ev5vlAx2/RZrlFicF1uQNJk3SCGiCYLn.exBGEHL09hwWJfUNi","admin","admin@example.com"))
	}

}

fun main(args: Array<String>){
	runApplication<DatarecoveryBackendApplication>(*args)
}
