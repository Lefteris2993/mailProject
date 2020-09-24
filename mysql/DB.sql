DROP DATABASE IF EXISTS MailProject;
CREATE DATABASE MailProject;
SET foreign_key_checks=0;
USE MailProject;

CREATE TABLE Users
(
    UserID INT NOT NULL auto_increment,
    UserName VARCHAR(64) NOT NULL,
    Password TEXT NOT NULL,
    PRIMARY KEY(UserID, UserName)
)ENGINE = InnoDB;

CREATE TABLE Messages
(
    MessageID INT NOT NULL auto_increment,
    SenderID INT NOT NULL,
    RecieverID INT,
    DateTime DATETIME,
    Subject TEXT,
    Body TEXT,
    PRIMARY KEY(MessageID),
    CONSTRAINT FOREIGN KEY (SenderID)
        REFERENCES Users (UserID),
    CONSTRAINT FOREIGN KEY (RecieverID)
        REFERENCES Users (UserID)
)ENGINE = InnoDB;

CREATE TABLE Threads
(
    ThreadID INT NOT NULL auto_increment,
    ThreadName TEXT,
    PRIMARY KEY(ThreadID)
)ENGINE = InnoDB;

CREATE TABLE ThreadMember
(
    ThreadID INT NOT NULL,
    UserID INT NOT NULL,
    PRIMARY KEY(ThreadID, UserID),
    CONSTRAINT FOREIGN KEY (ThreadID)
        REFERENCES Threads (ThreadID),
    CONSTRAINT FOREIGN KEY (UserID)
        REFERENCES Users (UserID)
)ENGINE = InnoDB;

CREATE TABLE ThreadMessages
(
    ThreadID INT NOT NULL,
    MessageID INT NOT NULL,
    PRIMARY KEY(ThreadID, MessageID),
    CONSTRAINT FOREIGN KEY (ThreadID)
        REFERENCES Threads (ThreadID),
    CONSTRAINT FOREIGN KEY (MessageID)
        REFERENCES Messages (MessageID)
)ENGINE = InnoDB;

set foreign_key_checks=1;
