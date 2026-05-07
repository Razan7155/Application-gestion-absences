# Absence Management Backend

Backend Spring Boot sécurisé avec JWT.

## Technologies

- Java 17
- Spring Boot
- Spring Security
- JWT
- MySQL
- Hibernate
- Maven

## Lancer

```bash
mvn spring-boot:run
```

## Port

9094

## Authentification

POST /auth/login

```json
{
  "username": "admin",
  "password": "admin"
}
```

## Fonctionnalités

- Auth JWT
- Gestion étudiants
- Gestion absences
- Sécurité Spring
