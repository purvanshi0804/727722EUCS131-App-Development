package com.example.agriback.repositary;

import com.example.agriback.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    // Additional query methods can be defined here if needed
}

