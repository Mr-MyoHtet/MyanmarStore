package com.myo.myanmarstore.service.Impl;

import java.time.Instant;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.myo.myanmarstore.dto.ContactRequestDto;
import com.myo.myanmarstore.entiity.Contact;
import com.myo.myanmarstore.repository.ContactRepository;
import com.myo.myanmarstore.service.ContactService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;

    @Override
    public boolean saveContact(ContactRequestDto contactRequestDto) {
        try {
            Contact contact = transformToEntity(contactRequestDto);
            contact.setCreatedAt((Instant.now()));
            contact.setCreatedBy(contactRequestDto.getName());
            contactRepository.save(contact);
            return true;
        } catch (Exception exception) {
            return false;
        }
    }

    private Contact transformToEntity(ContactRequestDto contactRequestDto) {
        Contact contact = new Contact();
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.map(contactRequestDto, contact);
        return contact;
    }

}