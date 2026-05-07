package com.example.absence.config;

import com.example.absence.entity.Role;
import com.example.absence.entity.User;
import com.example.absence.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final PasswordEncoder encoder;

    @Bean
    CommandLineRunner init(UserRepository repo) {

        return args -> {

            if (repo.findByUsername("admin").isEmpty()) {

                repo.save(
                        User.builder()
                                .username("admin")
                                .password(encoder.encode("admin"))
                                .role(Role.ADMIN)
                                .build()
                );
            }
        };
    }
}