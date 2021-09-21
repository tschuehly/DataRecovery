package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.service.PictureService
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/picture")
class PictureController( val pictureService: PictureService) {
    @GetMapping("/{id}")
    fun getById(
        @PathVariable id: Long,
    ): ResponseEntity<ByteArray>{
        val picture = pictureService.getById(id)
        return ResponseEntity.ok()
            .contentType(MediaType.parseMediaType(picture.type.toString()))
            .body(picture.data)

    }
}
