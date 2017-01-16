package models;

import java.util.*;
import javax.persistence.*;
import play.data.format.*;
import play.data.validation.*;

import com.avaje.ebean.Model;

@Entity
public class Stock extends Model {

    @Id
    @Constraints.Min(10)
    public Long id;

    @Constraints.Required
    public String symbol;

    @Constraints.Required
    public String name;

    public String type;

    public String exchange;

    public static Finder<Long, Stock> find = new Finder<Long,Stock>(Stock.class);
}