package com.myo.myanmarstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myo.myanmarstore.entiity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}