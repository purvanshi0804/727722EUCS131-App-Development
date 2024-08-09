// src/main/java/com/example/feedback/repository/FeedbackRepository.java
package com.example.agriback.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.agriback.model.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    // Additional query methods (if needed) can be defined here
}
