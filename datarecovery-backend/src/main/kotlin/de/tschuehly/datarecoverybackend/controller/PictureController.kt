package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.helpers.PictureContentStore
import de.tschuehly.datarecoverybackend.service.PictureService
import org.springframework.core.io.InputStreamResource
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*


@Suppress("SpringJavaInjectionPointsAutowiringInspection")

@RestController
@RequestMapping("api/picture")
class PictureController(
    val pictureService: PictureService,
    val pictureContentStore: PictureContentStore,
) {
    @GetMapping("/{id}")
    fun getById(
        @PathVariable id: Long,
    ): ResponseEntity<InputStreamResource> {
        pictureService.getById(id)
            ?.let { pic ->
                val content = pictureContentStore.getContent(pic)
                val inputStreamResource = InputStreamResource(content)

                return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(pic.type.toString()))
                    .body(inputStreamResource)
            }
        throw NoSuchElementException("There is no Image with the corresponding id")
//
    }
}
