package de.tschuehly.datarecoverybackend.service

import de.tschuehly.datarecoverybackend.model.Picture
import de.tschuehly.datarecoverybackend.repository.PictureRepository
import org.springframework.stereotype.Service

@Service
class PictureService( val pictureRespository: PictureRepository) {
    fun getById(id: Long): Picture {
        return pictureRespository.getOne(id)
    }

    fun save(picture: Picture): Picture {
        return pictureRespository.save(picture)
    }

}
