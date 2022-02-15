package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.model.Product
import de.tschuehly.datarecoverybackend.repository.ProductRepository
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.servlet.ModelAndView

@Controller
class BlogController(
    val productRepository: ProductRepository
) {
    @GetMapping("/api/article/{slug}")
    fun getArticle(
        @PathVariable slug: String,
        model: MutableMap<String, List<Product>>
    ): ModelAndView {
        val categoryProductList = productRepository.findAll().groupBy {
            it.category?.name
        }
        categoryProductList.keys.forEach {
            model[it.toString()] = categoryProductList.getOrElse(it) { emptyList() }
        }
        return ModelAndView("article/$slug", model)

    }
}
