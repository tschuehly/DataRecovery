package de.tschuehly.datarecoverybackend.helpers

import de.tschuehly.datarecoverybackend.model.Picture
import org.springframework.content.commons.repository.ContentStore

interface PictureContentStore : ContentStore<Picture, String>
