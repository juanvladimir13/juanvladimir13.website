<style>
  a {
    text-decoration: none;
  }
</style>

# Esquema de trabajo
*Sitio Web:* [https://juanvladimir13.web.app](https://juanvladimir13.web.app/) | *Portal BTH:* [https://juanvladimir13.web.app/bth/](https://juanvladimir13.web.app/bth/)

---

## Flujo de trabajo del Ecosistema

```mermaid
%%{init: {"themeCSS": "a { text-decoration: none !important; }"}}%%
flowchart LR
    %% Nivel 0: Raíz Central
    Root(("👤 juanvladimir13<br/><b>Ecosistema</b>"))

    %% Nivel 1: Bifurcación Principal
    Root --> BTH["🌐 Portal BTH (/bth/)<br/><i>Material Educativo</i>"]
    Root --> Serv["🔗 Plataformas y Servicios<br/><i>Ecosistema y Nube</i>"]

    %% Rama BTH
    BTH --> Avance["📚 Avance de Contenidos"]
    BTH --> Practica["🎯 Práctica y Evaluación"]

    %% Nodos Directos de Avance de Contenidos
    Avance --> Prog["💻 Programación<br/><i>5 Temas y TypeScript</i>"]
    Avance --> Web["🌐 Web Design<br/><i>HTML, CSS, Astro, PHP</i>"]
    Avance --> BD["💾 Base de Datos<br/><i>UML, SGBD, SQLite</i>"]
    Avance --> Rec["🛠️ Recursos BTH<br/><i>SO, Herramientas, API</i>"]
    Avance --> Soft["⚙️ Software<br/><i>Herramientas y Entornos</i>"]

    %% Sub-bifurcación Práctica y Evaluación con viñetas a la izquierda y texto normal
    Practica --> Examenes["<b>📝 Modelos de Examen</b><div style='text-align: left; font-weight: normal;'>• Pruebas de Código y SQL</div>"]
    Practica --> Proyectos["<b>💡 Ejemplos y Proyectos</b><div style='text-align: left; font-weight: normal;'>• 27 BDs SQLite y Backend</div>"]

    %% Rama Servicios
    Serv --> Estudio["📖 Recursos de Estudio"]
    Serv --> Infra["⚙️ Infraestructura y Nube"]

    %% Sub-bifurcación Estudio
    Estudio --> Apuntes["📝 Apuntes Web<br/>• Codelabs y Documentación"]
    Estudio --> YouTube["🎥 YouTube Playlists<br/>• Clases y Tutoriales"]

    %% Nodos Hijos con viñetas a la izquierda y texto normal
    Apuntes --> ApuntesDetalle["<b>📚 Contenidos del Sitio de Notas</b><div style='text-align: left; font-weight: normal;'>• 💻 Programación: Algoritmos y solución<br/>• 🌐 Web design: Sitios estáticos y dinámicos<br/>• 💾 Base de datos: Configuración web/móvil<br/>• 🛠️ Herramientas: IA, plugins y frameworks</div>"]
    YouTube --> YTList["<b>🎬 10 Playlists de Lecciones</b><div style='text-align: left; font-weight: normal;'>• Programación I<br/>• Lenguajes de programación<br/>• Base de datos<br/>• Web Design (Principal)<br/>• Flexbox y CSS Grid<br/>• Desarrollo web con PHP<br/>• Proyecto web con PHP<br/>• Instalación de programas 5to y 6to<br/>• Administración de servidores Linux<br/>• AI en desarrollo de software</div>"]

    %% Nodos Directos de Infraestructura y Nube
    Infra --> GitHub["🐙 GitHub Institucional<br/>• Repositorios de Código"]
    Infra --> NextCloud["☁️ NextCloud Servidor<br/>• Almacenamiento Cloud BTH"]
    Infra --> LimeSurvey["📋 LimeSurvey Sistema<br/>• Encuestas y Diagnósticos"]

    %% Directivas de Navegación Interactiva (Click)
    click Root "https://juanvladimir13.web.app" "Ir al Sitio Web de Juan Vladimir" _blank
    click BTH "https://juanvladimir13.web.app/bth/" "Ir al Portal BTH Sistemas Informáticos" _blank
    click Prog "https://juanvladimir13.web.app/bth/programacion" "Ir a la Materia de Programación" _blank
    click Web "https://juanvladimir13.web.app/bth/webdesign" "Ir a la Materia de Web Design" _blank
    click BD "https://juanvladimir13.web.app/bth/database" "Ir a la Materia de Base de Datos" _blank
    click Rec "https://juanvladimir13.web.app/bth/recursos" "Ir a la sección de Recursos" _blank
    click Soft "https://juanvladimir13.web.app/bth/software/" "Ir al catálogo de Software del BTH" _blank
    click Apuntes "https://juanvladimir13notes.web.app/" "Ir al Sitio de Apuntes y Codelabs" _blank
    click ApuntesDetalle "https://juanvladimir13notes.web.app/" "Explorar notas y codelabs" _blank
    click YouTube "https://www.youtube.com/@juanvladimir13/playlists" "Ir al Canal de Lecciones en YouTube" _blank
    click YTList "https://www.youtube.com/@juanvladimir13/playlists" "Ver las 10 playlists de lecciones" _blank
    click GitHub "https://github.com/sistemasinformaticossanjulian" "Ir a la Organización en GitHub" _blank
    click NextCloud "https://bthsanjulian.website:8021/" "Ir al Servidor NextCloud BTH" _blank
    click LimeSurvey "https://bthsanjulian.website:7777" "Ir al Sistema LimeSurvey" _blank

    %% Estilos de la paleta oficial BTH con font-weight normal
    classDef root fill:#082b16,stroke:#1f8c45,stroke-width:3px,color:#ffffff,font-weight:bold;
    classDef bthNode fill:#dff9e7,stroke:#1f8c45,stroke-width:2px,color:#082b16,font-weight:normal;
    classDef servNode fill:#e8f4fd,stroke:#1f4f8c,stroke-width:2px,color:#0b2240,font-weight:normal;
    classDef leafBTH fill:#ffffff,stroke:#1f8c45,stroke-width:1px,color:#194e2d,font-weight:normal;
    classDef leafServ fill:#ffffff,stroke:#1f4f8c,stroke-width:1px,color:#0b2240,font-weight:normal;

    class Root root;
    class BTH,Avance,Practica bthNode;
    class Serv,Estudio,Infra servNode;
    class Prog,Web,BD,Rec,Soft,Examenes,Proyectos leafBTH;
    class Apuntes,ApuntesDetalle,YouTube,YTList,GitHub,NextCloud,LimeSurvey leafServ;
```

---

### Descripción de Nodos y Enlaces Directos

#### 🌐 Rama 1: Portal BTH (`/bth/`)
- **Portal Principal:** [https://juanvladimir13.web.app/bth/](https://juanvladimir13.web.app/bth/) — Portal del Bachillerato Técnico Humanístico (BTH) en Sistemas Informáticos.
- **📚 Avance de Contenidos (Materias y Software):**
  - 💻 [Programación](https://juanvladimir13.web.app/bth/programacion): Conceptos, Álgebra de Boole, Ofimática, Introducción a la programación y Arrays de datos.
  - 🌐 [Web Design](https://juanvladimir13.web.app/bth/webdesign): HTML5, CSS3, Flexbox, Grid, DOM, LocalStorage, Astro y PHP.
  - 💾 [Base de Datos](https://juanvladimir13.web.app/bth/database): Fundamentos UML, SGBD/ACID, Motor SQLite y DDL/DML.
  - 🛠️ [Recursos](https://juanvladimir13.web.app/bth/recursos): Sistema Operativo, Compiladores e Intérpretes, BIOS/UEFI y particionado.
  - ⚙️ [Software](https://juanvladimir13.web.app/bth/software/): Catálogo de herramientas y entornos clasificados (Bun, Deno, VS Code, SQLite, DB Browser, GIMP, editores de texto).
- **🎯 Práctica y Evaluación:**
  - 📝 **Modelos de Examen:** Pruebas formativas prácticas en TypeScript, SQL, CSS y PHP.
  - 💡 **Ejemplos y Proyectos:** Colección de 27 bases de datos SQLite reales, repositorio de API REST backend y plantilla frontend Astro con Bun.

---

#### 🔗 Rama 2: Plataformas y Servicios Externos
- **📖 Recursos de Estudio:**
  - 📝 **Apuntes Web:** [juanvladimir13notes.web.app](https://juanvladimir13notes.web.app/) — Codelabs y notas en 4 secciones ([Programación](https://juanvladimir13notes.web.app/programacion/), [Web design](https://juanvladimir13notes.web.app/webdesign/), [Base de datos](https://juanvladimir13notes.web.app/database/), [Herramientas](https://juanvladimir13notes.web.app/tools/)).
  - 🎥 **YouTube:** [youtube.com/@juanvladimir13/playlists](https://www.youtube.com/@juanvladimir13/playlists) — 10 listas de reproducción de lecciones grabadas de cada asignatura:
    - 🎥 [Lecciones: Programación I](https://www.youtube.com/playlist?list=PLJGxuT2YtlhjRxXCtKtnoNAOv5RG5qkvl)
    - 🎥 [Lecciones: Lenguajes de programación](https://www.youtube.com/playlist?list=PLJGxuT2Ytlhj8K0N_t44uz_DtuwN2TaRW)
    - 🎥 [Lecciones: Base de datos](https://www.youtube.com/playlist?list=PLJGxuT2YtlhjUUuADW4b66gjJ1wX_Zkla)
    - 🎥 [Lecciones: Web Design (Playlist Principal)](https://www.youtube.com/playlist?list=PLJGxuT2YtlhiBOpZvru_yE4oiUJEWcTsj)
    - 🎥 [Lecciones: Flexbox y CSS Grid](https://www.youtube.com/playlist?list=PLJGxuT2YtlhjE2qGn1J5E-U0K38njk_qk)
    - 🎥 [Lecciones: Desarrollo web con PHP sin framework](https://www.youtube.com/playlist?list=PLJGxuT2YtlhiZBMXcHu3dM4GUBouqS5CH)
    - 🎥 [Lecciones: Proyecto web con PHP](https://www.youtube.com/playlist?list=PLJGxuT2Ytlhg4x7MxLHzC9wz3wpJvHG5j)
    - 🎥 [Lecciones: Instalación de programas 5to Sistemas Informáticos](https://www.youtube.com/playlist?list=PLJGxuT2YtlhhV9L8uyqycWLhGkrPw3YcP)
    - 🎥 [Lecciones: Instalación de programas 6to Sistemas Informáticos](https://www.youtube.com/playlist?list=PLJGxuT2YtlhgzTbzfvCU4VUr3W5tTe1pT)
    - 🎥 [Lecciones: Administración de servidores GNU/Linux](https://www.youtube.com/playlist?list=PLJGxuT2YtlhjEeB8WpzUPDPUcgMPbGw2t)
    - 🎥 [Lecciones: AI en el desarrollo de software](https://www.youtube.com/playlist?list=PLPFoP4zb2JH4)
- **⚙️ Infraestructura y Nube (Nodos Directos):**
  - 🐙 **GitHub:** [github.com/sistemasinformaticossanjulian](https://github.com/sistemasinformaticossanjulian) — Organización con repositorios de código abierto de los estudiantes.
  - ☁️ **NextCloud:** [bthsanjulian.website:8021](https://bthsanjulian.website:8021/) — Almacenamiento en la nube institucional para imágenes y software.
  - 📋 **LimeSurvey:** [bthsanjulian.website:7777](https://bthsanjulian.website:7777) — Evaluaciones diagnósticas y encuestas de satisfacción académica.
