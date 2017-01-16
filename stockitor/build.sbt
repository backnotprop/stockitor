name := """Stockitor"""
organization := "ramos.dev"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.11.8"

libraryDependencies ++= Seq(
  filters,
  jdbc,
  "org.postgresql" % "postgresql" % "9.4-1206-jdbc42"
)