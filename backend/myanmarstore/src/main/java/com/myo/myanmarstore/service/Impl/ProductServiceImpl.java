package com.myo.myanmarstore.service.Impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.myo.myanmarstore.dto.ProductDto;
import com.myo.myanmarstore.entiity.Product;
import com.myo.myanmarstore.repository.ProductRepository;
import com.myo.myanmarstore.service.ProductService;

import ch.qos.logback.core.joran.util.beans.BeanUtil;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    // This is constructore Injection
    private final ProductRepository productRepository;

    @Override
    public List<ProductDto> getProducts() {
        return productRepository.findAll()
                // .stream().map(this::transformDTO).collect(Collectors.toList());
                .stream().map(product -> transformDTO(product)).collect(Collectors.toList());

    }

    private ProductDto transformDTO(Product product) {
        // ProductDto productDto = new ProductDto();
        // BeanUtils.copyProperties(product, productDto);
        // productDto.setProductId(product.getId());
        ModelMapper modelMapper = new ModelMapper();
        ProductDto productDto = modelMapper.map(product, ProductDto.class);
        return productDto;
    }
}
