import Project01 from "../assets/img/project_2023_01.png";
import Project02 from "../assets/img/project_2023_02.jpg";
import Project03 from "../assets/img/project_2024_01.png";
import Project04 from "../assets/img/project_2024_02.png";
import Project05 from "../assets/img/project_2024_03.png";
import Project06 from "../assets/img/project_2024_04.png";
import Project07 from "../assets/img/project_2024_05.png";
import Project08 from "../assets/img/project_2024_05.png";
import Project09 from "../assets/img/project_2025_01.png";

const colors = [
    "var(--sub01)",
    "var(--sub02)",
    "var(--sub03)",
    "var(--sub04)",
    "var(--sub05)",
];

export const portfolioData = [
    {
        year: 2023,
        items: [
            {
                title: "Portfolio",
                description: `2023년, Node.js로 제작한 첫 프로젝트입니다. Nav를 클릭하면 해당 페이지로 이동하고, 뒤로 갈 때마다 테마가 전환되는 구조로 사용자 흐름을 유도했습니다. 애니메이션은 GSAP을 활용해 페이지 전환 시 부드러운 인터랙션을 구현했으며, 특히 처음으로 애니메이션을 적용해본 프로젝트라 더욱 기억에 남습니다. 처음이라 어려운 점도 많았고, 백엔드 배포는 끝내 완성하지 못했지만, 끝까지 UI와 흐름을 직접 구성하며 사이트를 완성해냈다는 점에서 큰 뿌듯함을 느낀 작업입니다.`,
                제작: "단독 개발",
                스택: ["Node.js"],
                github: "https://github.com/jeongsaeyeong/portfolio_new2023",
                link: "https://portfolio-01.fly.dev/",
                etc: "",
                img: Project01
            },
            {
                title: "ADD-PLUS",
                description: `대학 입시 정보 통합 플랫폼으로, 기획부터 제작까지 직접 수행한 프로젝트입니다. 입시를 준비하는 수험생과 학부모, 교사, 대학 관계자 등 다양한 사용자의 니즈를 분석하여 구조화된 기능을 설계했고, 사이트 전체 흐름과 사용자 경험을 고려한 UI/UX 기획과 디자인, 페이지별 기능 정의까지 전반을 주도했습니다. 처음부터 기획을 주도한 대형 프로젝트였던 만큼, 사용자 흐름과 정보 구조를 다듬는 과정에서 많은 고민과 시행착오가 있었지만, 실제 사용자 입장에서의 불편함을 해결하려는 접근이 가장 큰 보람으로 남았습니다.`,
                제작: "3인, 백엔드 파트 위주 개발",
                스택: ["Node.js"],
                github: "https://github.com/jeongsaeyeong/ADD-PLUS",
                link: "",
                etc: "",
                img: Project02
            },
        ],
    },
    {
        year: 2024,
        items: [
            {
                title: "손틈새로",
                description: `「손틈새로는」은 멋쟁이사자처럼 12기 운영진 해커톤 '트렌디톤의 주제 *‘분초사회’*를 바탕으로 제작한 웹사이트입니다. 첫 해커톤 경험으로, 타 대학 학생들과 팀을 이루어 제작하였고, 프론트엔드 파트를 리드하며 프로젝트의 기초 세팅과 시간 계산 API 연동을 담당했습니다. 이 과정을 통해 GitHub 협업 방식과 브랜치 전략을 익혔고, 효과적인 협업을 위한 의사소통 방식과 문서화의 중요성을 직접 체감했습니다.`,
                제작: "총 7인, Timeset 및 Main 페이지 제작",
                스택: ["React.js", "Sass"],
                github: "https://github.com/a-minute-society/front-end",
                link: "https://trenditonstsr.netlify.app/",
                etc: "",
                img: Project03
            },
            {
                title: "Kid in Seoul",
                description: `이 프로젝트는 서울시 공공데이터 활용 창업 공모전 출품을 위해 제작한 웹사이트입니다. 기획과 아이디어 도출을 주도했으며, 교내 학생들과 팀을 이루어 공동 출품하였습니다. 단독 프론트엔드 담당자로서 캘린더, 커뮤니티, 회원가입, 로그인, 마이페이지 등의 다양한 기능을 구현하고, 백엔드에서 제공한 API를 실제 서비스에 연동했습니다. 특히 이 경험을 통해, 백엔드와의 효율적인 협업을 위해선 구체적인 오류 코드와 Request 정보를 명확히 전달하는 것이 중요하다는 점을 체감했습니다. 비록 수상은 하지 못했지만, 원활한 협업을 인정받아 이후 ‘Culticare’ 프로젝트에서 다시 협업 제안을 받는 성과로 이어졌습니다.`,
                제작: "총 5인, 단독 프론트엔드",
                스택: ["React.js", "Sass"],
                github: "https://github.com/jeongsaeyeong/Kid_in_seoul",
                link: "https://kid-in-seoul.netlify.app/",
                etc: "https://colorful-platinum-d83.notion.site/Kid-In-Seoul-e0b458572a2d46c8b730d143cd437e51?source=copy_link",
                img: Project04
            },
            {
                title: "Culticare",
                description: `교내 개발 공모전에 출품하기 위해 React Native로 제작한 모바일 앱 프로젝트입니다. 앱 개발을 위해 Android Studio와 React Native를 함께 학습하며 실행 환경을 구성하였고, 이 과정에서 각 프로그램의 버전을 맞추는 데 오랜 시간이 소요되었습니다. 이를 계기로 이후에는 프로젝트를 시작하기 전 버전 확인을 습관화하게 되었습니다. 앱에는 AI 기능과 번역기 API를 연계해 실제 사용 가능한 기능을 구현했습니다. 비록 수상하지는 못했지만, React는 웹 개발 중심인 반면 React Native는 모바일 환경에 최적화된 구조로, 컴포넌트 구성 방식과 스타일링, 테스트 흐름이 전혀 다르다는 점을 직접 체감할 수 있었고, 이를 통해 새로운 플랫폼에서 개발할 때의 유의점을 배울 수 있었습니다.`,
                제작: "총 6인, 녹음 제외 모든 기능 단독 프론트 구현",
                스택: ["React Native"],
                github: "https://github.com/culticare-app/Culticare-FrontEnd",
                link: "",
                etc: "",
                img: Project05
            },
            {
                title: "2024 SSWU Eternal",
                description: `성신여자대학교 대동제를 위해 제작한 모바일 웹 기반 사이트입니다. 총학생회와의 미팅 및 조율을 통해 필요한 기능을 구체화했고, 클라이언트의 요구사항을 정리하고 소통하는 방식을 직접 익힐 수 있었습니다. 프론트엔드 총괄 담당자로서 초기 세팅과 파트 분배를 맡아 프로젝트를 리드하였으며, 심리테스트, 관리자 모드, 회원가입 기능을 구현했습니다. 진행 과정에서는 팀원들의 개발 진도를 관리하고, 최종 파일을 머지한 뒤 발생한 이슈를 직접 수정하며 사이트의 완성도를 높이는 역할을 수행했습니다.`,
                제작: "총 11인, 심리테스트·관리자모드·회원가입 담당 개발",
                스택: ["React"],
                github: "https://github.com/2024-SSWU-Eternal/Eternal-FE",
                link: "https://sswu-eternal.com/",
                etc: "",
                img: Project06
            },
            {
                title: "2024 LIkelion SSWU Restrospect",
                description: `멋쟁이사자처럼 12기 성신여자대학교 회고를 위해 만든 사이트입니다. 퍼블리싱과 애니메이션 위주로 제작하였습니다.`,
                제작: "단독 프론트엔드",
                스택: ["React.js", "Sass"],
                github: "https://github.com/jeongsaeyeong/2024_likelion_Retrospect",
                link: "https://2024sswulikelion.netlify.app/",
                etc: "",
                img: Project07
            },
            {
                title: "Education",
                description: `멋쟁이사자처럼 12기~13기 프론트엔드 운영진으로 활동하며 부원 교육을 담당했습니다. 2023년 수료 당시 받았던 교육 내용을 바탕으로, 부원들의 수준에 맞는 과제를 구성하고 전달할 수 있었으며, 실습과 피드백을 통해 함께 성장하는 경험을 만들고자 노력했습니다. 운영진 활동을 통해 개발 조직 문화와 협업 방식에 대해 깊이 이해하게 되었고, 부원들과 함께 개발에 대한 고민과 진로를 나누며 저 역시 많은 성장을 이룰 수 있던 시간이었습니다.`,
                제작: "운영진 활동",
                스택: ["HTML", "CSS", "JavaScript", "React", "Sass"],
                github: "",
                link: "",
                etc: "",
                img: ''
            },
        ],
    },
    {
        year: 2025,
        items: [
            {
                title: "당근 포트폴리오",
                description: `Software Engineer Intern - Frontend 포지션의 기술 요건 중 하나인 TypeScript 사용 경험을 쌓기 위해 직접 프로젝트를 제작했습니다. 기존에는 TypeScript의 필요성을 명확히 체감하지 못했지만, 당근마켓 리디자인 사이트를 TypeScript 기반으로 구현하면서 컴포넌트 단위의 타입 선언, props 및 API 데이터 구조 정의 등에서 TypeScript의 안정성과 효율성을 직접 경험할 수 있었습니다. 작은 실수도 사전에 방지해주는 타입 시스템의 장점을 깨달았고, 이후에는 개발 생산성과 협업 효율을 높이기 위해 TypeScript를 더욱 깊이 있게 학습해 실무에 적극 활용하고자 합니다.`,
                제작: "단독",
                스택: ["TypeScript", "Sass"],
                github: "",
                link: "",
                etc: "",
                img: Project09
            },
        ],
    },
];

export const projects2023 = portfolioData
    .find((group) => group.year === 2023)
    .items.map((item, idx) => ({
        img: Project01,
        label: item.title,
        color: colors[idx % colors.length],
    }));

export const projects2024 = portfolioData
    .find((group) => group.year === 2024)
    .items.map((item, idx) => ({
        img: Project01,
        label: item.title,
        color: colors[idx % colors.length],
    }));

export const projects2025 = portfolioData
    .find((group) => group.year === 2025)
    .items.map((item, idx) => ({
        img: Project01,
        label: item.title,
        color: colors[idx % colors.length],
    }));

export const educationProjects = [
    { img: Project01, label: "Education", color: colors[0] },
];
