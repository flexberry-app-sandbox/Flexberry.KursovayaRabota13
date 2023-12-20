package KursovayaRabota.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KursovayaRabota.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Считыватель
 */
@Entity(name = "IISKursovayaRabotaСчитыватель")
@Table(schema = "public", name = "Считыватель")
public class Schityvatel {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "УникальныйКод")
    private String уникальныйкод;


    public Schityvatel() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getУникальныйКод() {
      return уникальныйкод;
    }

    public void setУникальныйКод(String уникальныйкод) {
      this.уникальныйкод = уникальныйкод;
    }


}