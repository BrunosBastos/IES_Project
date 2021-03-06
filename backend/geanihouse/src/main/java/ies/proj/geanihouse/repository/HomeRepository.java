package ies.proj.geanihouse.repository;

import ies.proj.geanihouse.model.Client;
import ies.proj.geanihouse.model.Home;
import ies.proj.geanihouse.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HomeRepository extends  JpaRepository<Home,Long> {
    List<Home> findAllByClients_id(long id);

}
