import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="IoT Automation Bell System Description"
              description="The IoT Automation Bell System is a smart solution designed to automate the ringing of school, factory, or office bells using Internet of Things (IoT) technology. Instead of relying on manual ringing or traditional timer-based systems, this system connects to the internet, allowing administrators to schedule, monitor, and control the bell remotely from a mobile app, web dashboard, or computer.

With features like customizable schedules, real-time updates, and remote control, the IoT bell ensures accuracy, efficiency, and reduced human error. It can be integrated with Wi-Fi enabled microcontrollers (such as ESP8266/ESP32), cloud databases, and web apps to manage multiple bells across different locations.."
              ghLink="#"
              demoLink="https://schbell2font.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="School Management System"
              description="A School Management System is a comprehensive software solution designed to simplify, digitize, and automate the daily administrative, academic, and communication tasks of schools, colleges, and educational institutions. It serves as a centralized platform that connects administrators, teachers, students, and parents—making school operations more efficient and transparent.

This system integrates modules such as student enrollment, attendance, timetable management, fee collection, examination, grading, reporting, communication, and library management, providing a one-stop solution for academic and administrative needs.. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="The RFID IoT Attendance System"
              description="The RFID IoT Attendance System is a smart solution designed to automate and digitize the process of recording attendance in schools, offices, and organizations. It uses Radio Frequency Identification (RFID) technology to uniquely identify individuals through RFID cards or tags, while leveraging the Internet of Things (IoT) for real-time data storage, monitoring, and analysis.

When a student or employee taps their RFID card on the reader, the system automatically records their identity, date, and time, then uploads the data to a cloud database or local server. Administrators, teachers, or managers can monitor attendance through a web portal or mobile app, ensuring accuracy, efficiency, and transparency compared to manual methods."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="#"
            // demoLink="#" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="#"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
