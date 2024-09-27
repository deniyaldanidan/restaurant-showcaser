CREATE TABLE `booking` (
	`id` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`noOFPersons` int NOT NULL,
	`date` date NOT NULL,
	`time` time NOT NULL,
	`mobile` varchar(15) NOT NULL,
	CONSTRAINT `booking_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `foodCategory` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(500) NOT NULL,
	`description` text NOT NULL,
	`foodType` enum('STARTERS','SOUPSNSALADS','MAINCOURSE','DESSERTS','SPECIALITIES','BEVERAGES','COMBOSNPLATERS') NOT NULL,
	CONSTRAINT `foodCategory_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `food` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`price` int NOT NULL,
	`availability` json NOT NULL,
	`veg` boolean NOT NULL,
	`foodCategoryId` int NOT NULL,
	CONSTRAINT `food_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`userName` varchar(255) NOT NULL,
	`email` varchar(500) NOT NULL,
	`password` varchar(750) NOT NULL,
	`refreshToken` varchar(750),
	`role` enum('4128'),
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_userName_unique` UNIQUE(`userName`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `food` ADD CONSTRAINT `food_foodCategoryId_foodCategory_id_fk` FOREIGN KEY (`foodCategoryId`) REFERENCES `foodCategory`(`id`) ON DELETE cascade ON UPDATE no action;