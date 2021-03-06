package ies.proj.geanihouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ies.proj.geanihouse.model.Type;

import java.util.List;


@Repository
public interface TypeRepository extends JpaRepository<Type, Long>{
    Type findByName(String name);
}
