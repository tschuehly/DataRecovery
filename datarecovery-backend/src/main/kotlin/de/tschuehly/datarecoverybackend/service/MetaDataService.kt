package de.tschuehly.datarecoverybackend.service

import de.tschuehly.datarecoverybackend.helpers.CrudService
import de.tschuehly.datarecoverybackend.model.MetaData
import de.tschuehly.datarecoverybackend.repository.MetaDataRepository
import org.springframework.stereotype.Service

@Service
class MetaDataService(metaDataRepository: MetaDataRepository):
    CrudService<MetaData,MetaDataRepository>(metaDataRepository){
}
