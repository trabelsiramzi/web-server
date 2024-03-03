-- Table Role
CREATE TABLE Roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) UNIQUE
);

-- Table User
CREATE TABLE Users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    naissance DATE,
    photo VARCHAR(255),
    telephone VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    mot_de_passe VARCHAR(255),
    RoleId INT,
    FOREIGN KEY (RoleId) REFERENCES Roles(id)
);
