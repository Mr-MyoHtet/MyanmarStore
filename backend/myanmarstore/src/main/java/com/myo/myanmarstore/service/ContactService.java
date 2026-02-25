package com.myo.myanmarstore.service;

import com.myo.myanmarstore.dto.ContactRequestDto;

public interface ContactService {
    boolean saveContact(ContactRequestDto contactRequestDto);
}