import Image from "next/image"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Abdessamad Abdaoui"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">ABDESSAMAD ABDAOUI</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">ÉTUDIANT EN DÉVELOPPEMENT WEB ET BASES DE DONNÉES</p>
          <p className="text-lg max-w-2xl mx-auto">Développeur passionné par les solutions innovantes</p>
          <div className="pt-6">
            <Button size="lg" asChild>
              <a href="#contact">Me contacter</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <a href="#about" className="text-muted-foreground">
            <ChevronDown size={36} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">À propos</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Je suis un étudiant passionné en Licence de Développement Web et Base de Données à l'Université Chouaibe
              Doukkali. Mon parcours académique m'a permis d'acquérir des compétences solides en programmation,
              conception de bases de données et développement d'applications web et desktop.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              En tant que délégué de promotion pendant plusieurs semestres, j'ai développé d'excellentes compétences en
              leadership et en travail d'équipe. Je suis particulièrement intéressé par les technologies innovantes et
              les projets qui combinent créativité et rigueur technique.
            </p>
            <p className="text-lg leading-relaxed">
              Mon objectif est de mettre à profit mes connaissances et mon expérience pour contribuer à des projets
              ambitieux dans le domaine du développement web et des bases de données, tout en continuant à approfondir
              mes compétences techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Expériences professionnelles</h2>
          <div className="max-w-4xl mx-auto">
            <div className="border-l-2 border-primary pl-6 space-y-12">
              <div className="relative">
                <div className="absolute -left-[31px] w-6 h-6 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold">Délégué de promotion</h3>
                    <Badge>S3, S4, S5, S6</Badge>
                  </div>
                  <p className="text-muted-foreground">Université Chouaibe Doukkali</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Représentation des étudiants auprès de l'administration universitaire</li>
                    <li>Organisation et coordination d'activités académiques</li>
                    <li>Médiation entre les étudiants et les enseignants</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">AcadScheduler</h3>
                <p className="text-muted-foreground mb-4">avril 2025 - Présent</p>
                <p className="mb-4">
                  Application Web pour la gestion académique : planification des emplois du temps, gestion des
                  utilisateurs, réservation/modification de séances et consultation des cours.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">HTML/CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">MySQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Gestion d'une Banque</h3>
                <p className="text-muted-foreground mb-4">janvier 2025 - Présent</p>
                <p className="mb-4">
                  Application Desktop avec trois interfaces principales: Client, Employé et Directeur, chacune avec des
                  fonctionnalités spécifiques adaptées aux rôles.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Java Swing</Badge>
                  <Badge variant="outline">MySQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">SMART HOUSE</h3>
                <p className="text-muted-foreground mb-4">Juillet 2024</p>
                <p className="mb-4">
                  Projet domotique dans le cadre de ROMITIF. Programmation d'une carte Arduino pour contrôler divers
                  équipements: capteurs de gaz, capteurs d'incendie, caméra de surveillance, système antivol.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Arduino</Badge>
                  <Badge variant="outline">IoT</Badge>
                  <Badge variant="outline">Capteurs</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Compétences</h2>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="tech" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="tech">Techniques</TabsTrigger>
                <TabsTrigger value="languages">Langues</TabsTrigger>
                <TabsTrigger value="soft">Soft Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="tech">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Développement Web</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>HTML, CSS, JavaScript</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>PHP8</span>
                          <span>80%</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>J2EE, Modèle MVC</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>ORM: Framework Hibernate JPA</span>
                          <span>70%</span>
                        </div>
                        <Progress value={70} className="h-2" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Bases de Données</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>MySQL</span>
                          <span>90%</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Oracle</span>
                          <span>80%</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Administration des BD par Oracle</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Conception</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>UML</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>MERISE (MCD), MLD</span>
                          <span>80%</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Développement Desktop</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>JAVA, JAVA SWING</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>C, Communication IPC</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Git / GitHub</span>
                          <span>80%</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Dactylographie</span>
                          <span>70%</span>
                        </div>
                        <Progress value={70} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="languages">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Arabe (Langue Maternelle)</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Français (B1)</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Anglais (B1)</span>
                      <span>70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="soft">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Esprit de travail Collaboratif</h3>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Discipline</h3>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M12 20h9"></path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Leadership</h3>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Communication</h3>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Formation</h2>
          <div className="max-w-4xl mx-auto">
            <div className="border-l-2 border-primary pl-6 space-y-12">
              <div className="relative">
                <div className="absolute -left-[31px] w-6 h-6 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Licence Développement Web et Base de Données</h3>
                  <p className="text-muted-foreground">Université Chouaibe Doukkali FS - El Jadida (en cours)</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] w-6 h-6 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">DEUG Sciences Mathématiques Applique et informatiques SMAI</h3>
                  <p className="text-muted-foreground">Université Chouaibe Doukkali FS - El Jadida | 2022-2024</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] w-6 h-6 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Baccalauréat Sciences Mathématique A</h3>
                  <p className="text-muted-foreground">Lycée IBN ABBAD - Settat | 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact</h2>
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Téléphone</p>
                    <p>+212641982307</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>abdssamadabdaoui@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localisation</p>
                    <p>Maroc, ville de Settat</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a
                      href="https://github.com/Abdaoui-Abdessamad"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/Abdaoui-Abdessamad
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/abdessamd-abdaoui-86761a216/"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/abdessamd-abdaoui-86761a216
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <p className="text-lg">
                N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Abdessamad Abdaoui. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
