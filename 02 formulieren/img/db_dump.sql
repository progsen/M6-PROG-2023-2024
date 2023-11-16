--
-- Table structure for table `WeersomstandighedenPerDag`
--
CREATE TABLE `WeersomstandighedenPerDag`
(
    `id`                int(11) unsigned NOT NULL AUTO_INCREMENT,
    `Datum`             date           NOT NULL,
    `plaats`            varchar(120)   NOT NULL,
    `aantalGraden`      decimal(10, 1) NOT NULL,
    `windKracht`        int(11) NOT NULL,
    `regenInMilimeters` int(11) NOT NULL,
    PRIMARY KEY (`id`)
);

--
-- Dumping data for table `WeersomstandighedenPerDag`
--
INSERT INTO `WeersomstandighedenPerDag` (`Datum`, `plaats`, `aantalGraden`, `windKracht`, `regenInMilimeters`)
VALUES ('2023-10-15', 'amsterdam', 15.0, 1, 0),
       ('2023-10-16', 'bussum', 16.3, 1, 0),
       ('2023-10-14', 'amsterdam', 17.1, 0, 0),
       ('2023-10-14', 'bussum', 16.0, 12, 6),
       ('2023-10-12', 'diemen', 16.0, 3, 0);
