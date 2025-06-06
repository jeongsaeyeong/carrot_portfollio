import React from "react";
import { motion, Variants } from "framer-motion";
import {
    projects2023,
    projects2024,
    projects2025,
    educationProjects,
} from "../../data/projectdata";
import { useNavigate } from "react-router-dom";

const listContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const listItem: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const Project = () => {
    const navigation = useNavigate();

    const onDetail = (label: string) => {
        navigation(`/project/${label}`)
    }

    return (
        <div className="Project_wrap container">
            <div className="top">
                <h1>PROJECT</h1>
                <p>해를 거듭하며 발전하는 실력</p>
            </div>

            <div className="bottom">
                <div>
                    <h2>2023</h2>
                    <motion.div
                        className="list_wrap"
                        variants={listContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {projects2023.map((proj, idx) => (
                            <motion.div
                                className="list"
                                variants={listItem}
                                key={idx}
                                style={{ backgroundColor: proj.color }}
                                onClick={() => { onDetail(proj.label) }}
                            >
                                <p>{proj.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div>
                    <h2>2024</h2>
                    <motion.div
                        className="list_wrap"
                        variants={listContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {projects2024.map((proj, idx) => (
                            <motion.div
                                className="list"
                                variants={listItem}
                                key={idx}
                                style={{ backgroundColor: proj.color }}
                                onClick={() => { onDetail(proj.label) }}
                            >
                                <p>{proj.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div>
                    <h2>2025</h2>
                    <motion.div
                        className="list_wrap"
                        variants={listContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {projects2025.map((proj, idx) => (
                            <motion.div
                                className="list"
                                variants={listItem}
                                key={idx}
                                style={{ backgroundColor: proj.color }}
                                onClick={() => { onDetail(proj.label) }}
                            >
                                <p>{proj.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Project;
