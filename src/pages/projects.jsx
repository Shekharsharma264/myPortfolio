import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I’ve Built While Trying to Leave My Mark on the Universe ✨
						</div>

						<div className="subtitle projects-subtitle">
							I’ve dabbled with all sorts of projects over time – some turned out great, some… let’s just say they taught me valuable lessons 😂.  Most of my work is open-source, just chillin’ out there waiting for curious minds like you to explore. If you find something cool, feel free to jump in, suggest upgrades, or even roast my code (gently please 😅).

							<b>Let’s collaborate and maybe, just maybe, create something that makes the universe raise an eyebrow 🚀.</b>
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
