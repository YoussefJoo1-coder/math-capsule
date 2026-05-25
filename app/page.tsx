"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [students, setStudents] = useState<{ name: string; code: string }[]>([]);

  const [sections, setSections] = useState([
    {
      title: "Calculus",
      videos: [
        {
          title: "Limits Lesson 1",
          url: "https://www.youtube-nocookie.com/embed/98x6ffAyZkI?modestbranding=1&rel=0"
        }
      ]
    }
  ]);

  useEffect(() => {

    const savedSections =
      localStorage.getItem("sections");

    const savedStudents =
      localStorage.getItem("students");

    if (savedSections) {
      setSections(JSON.parse(savedSections));
    }

    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "sections",
      JSON.stringify(sections)
    );

  }, [sections]);

  useEffect(() => {

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

  }, [students]);

  const addSection = () => {

    const sectionName = prompt("Section Name");

    if (!sectionName) return;

    setSections([
      ...sections,
      {
        title: sectionName,
        videos: []
      }
    ]);
  };

  const addVideo = (sectionIndex: number) => {

    const title = prompt("Video Title");

    const url = prompt(
      "Paste YouTube Embed Link"
    );

    if (!title || !url) return;

    const updatedSections = [...sections];

    updatedSections[sectionIndex].videos.push({
      title,
      url
    });

    setSections(updatedSections);
  };

  const deleteVideo = (
    sectionIndex: number,
    videoIndex: number
  ) => {

    const updatedSections = [...sections];

    updatedSections[sectionIndex].videos.splice(
      videoIndex,
      1
    );

    setSections(updatedSections);
  };

  const addStudent = () => {

    const name = prompt("Student Name");

    const code = prompt("Student Code");

    if (!name || !code) return;

    setStudents([
      ...students,
      {
        name,
        code
      }
    ]);
  };

  const deleteStudent = (index: number) => {

    const updatedStudents = [...students];

    updatedStudents.splice(index, 1);

    setStudents(updatedStudents);
  };

  return (
    <main
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "50px",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px"
          }}
        >

          <img
            src="/logo.png"
            alt="logo"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain"
            }}
          />

          <div>

            <h1
              style={{
                color: "yellow",
                fontSize: "65px",
                fontWeight: "bold",
                marginBottom: "10px"
              }}
            >
              Math Capsule
            </h1>

            <p
              style={{
                color: "gray",
                fontSize: "20px"
              }}
            >
              Eng. Nour Shehab Platform
            </p>

          </div>

        </div>

        <button
          onClick={addSection}
          style={{
            background: "yellow",
            color: "black",
            border: "none",
            padding: "18px 30px",
            borderRadius: "18px",
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Add Section
        </button>

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "40px"
        }}
      >

        {sections.map((section, sectionIndex) => (

          <div
            key={sectionIndex}
            style={{
              background: "#111",
              border: "1px solid #333",
              borderRadius: "30px",
              padding: "25px"
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "25px"
              }}
            >

              <h2
                style={{
                  color: "yellow",
                  fontSize: "40px",
                  fontWeight: "bold"
                }}
              >
                {section.title}
              </h2>

              <button
                onClick={() =>
                  addVideo(sectionIndex)
                }
                style={{
                  background: "yellow",
                  color: "black",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "15px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                Add Video
              </button>

            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px"
              }}
            >

              {section.videos.map(
                (video, videoIndex) => (

                  <div
                    key={videoIndex}
                    style={{
                      background: "#000",
                      border: "1px solid #333",
                      borderRadius: "25px",
                      padding: "20px"
                    }}
                  >

                    <div
                      style={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                        alignItems: "center",
                        marginBottom: "15px"
                      }}
                    >

                      <h3
                        style={{
                          fontSize: "28px",
                          fontWeight: "bold"
                        }}
                      >
                        {video.title}
                      </h3>

                      <button
                        onClick={() =>
                          deleteVideo(
                            sectionIndex,
                            videoIndex
                          )
                        }
                        style={{
                          background: "red",
                          color: "white",
                          border: "none",
                          padding: "10px 15px",
                          borderRadius: "10px",
                          cursor: "pointer"
                        }}
                      >
                        Delete
                      </button>

                    </div>

                    <div
                      style={{
                        aspectRatio: "16/9",
                        borderRadius: "20px",
                        overflow: "hidden"
                      }}
                    >

                      <iframe
                        width="100%"
                        height="100%"
                        src={video.url}
                        title="video"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{
                          border: "none"
                        }}
                      ></iframe>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>
        ))}

      </div>

      <div
        style={{
          marginTop: "70px",
          background: "#111",
          border: "1px solid #333",
          borderRadius: "30px",
          padding: "30px"
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >

          <h2
            style={{
              color: "yellow",
              fontSize: "45px",
              fontWeight: "bold"
            }}
          >
            Students
          </h2>

          <button
            onClick={addStudent}
            style={{
              background: "yellow",
              color: "black",
              border: "none",
              padding: "15px 20px",
              borderRadius: "15px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Add Student
          </button>

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px"
          }}
        >

          {students.map((student, index) => (

            <div
              key={index}
              style={{
                background: "#000",
                border: "1px solid #333",
                borderRadius: "25px",
                padding: "25px"
              }}
            >

              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  marginBottom: "10px"
                }}
              >
                {student.name}
              </h3>

              <p
                style={{
                  color: "gray",
                  fontSize: "18px"
                }}
              >
                Student Code: {student.code}
              </p>

              <button
                onClick={() =>
                  deleteStudent(index)
                }
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "10px",
                  marginTop: "15px",
                  cursor: "pointer"
                }}
              >
                Delete Student
              </button>

            </div>
          ))}

        </div>

      </div>

      <div
        style={{
          marginTop: "70px",
          display: "flex",
          justifyContent: "center"
        }}
      >

        <img
          src="/teacher.png"
          alt="teacher"
          style={{
            width: "400px",
            borderRadius: "30px",
            border: "4px solid yellow"
          }}
        />

      </div>

    </main>
  );
}