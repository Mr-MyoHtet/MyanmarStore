package com.myo.myanmarstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myo.myanmarstore.entiity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
