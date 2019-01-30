Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

function doOnCurrentPageChanged(survey) {
  $("#surveyProgress").width(((survey.currentPageNo + 1) * 100 / survey.visiblePageCount) + '%');
}

var json = {
  questionTitleLocation:"top",
  showQuestionNumbers:"on",
  pages: [{
    name:"SCT1.1",
    title: {
      default:"A.  ABOUT YOU",
      es:"A.  ACERCA DE USTED",
      fr:"A.  À PROPOS DE VOUS",
      ar:"&nbsp;عن نفسك&nbsp;"
    },
    questions: [{
      type:"radiogroup",
      name:"Q1.1",
      title: {
        default:"How politically active are you?",
        es:"¿Que tan políticamente activa es usted?",
        fr:"Dans quelle mesure êtes-vous politiquement active?",
        ar:"&nbsp;إلى أيّ مدى أنت؍ ناشطة سياسياً بشكلٍ عام؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"03",
        text: {
          default:"&nbsp;Very active - You participate in some kind of political activity daily (for example, you are an elected office holder or community organizer)",
          es:"&nbsp;Muy activa - Usted participa en algún tipo de actividad política diariamente (por ejemplo, Usted es una funcionaria electa o una organizadora comunitaria)",
          fr:"&nbsp;Très active - Vous participez à une activité politique quotidienne (par exemple, vous êtes une élue ou une organisatrice communautaire)",
          ar:"&nbsp;ناشطة جداً- أشارك في شكلٍ من أشكال الأنشطة السياسية بشكل يومي، على سبيل المثال: اشغل منصب سياسي او منسقة مجتمع&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;Active - You participate in some kind of political activity weekly, such as advocating on an issue in person and/or online",
          es:"&nbsp;Activa - Usted participa en algún tipo de actividad política semanal, como abogar por un problema en persona y / o en línea",
          fr:"&nbsp;Active - Vous participez à une activité politique hebdomadaire, par exemple en défendant une question en personne et / ou en ligne",
          ar:"&nbsp;ناشطة- أشارك في شكلٍ من أشكال الأنشطة السياسية بشكل أسبوعي، على سبيل المثال: أدعم قضية ما بشكل شخصي او عن طريق المواقع الالكترونية&nbsp;"
        }
      }, {
        value:"0001",
        text: {
          default:"&nbsp;Somewhat active - You participate in some kind of political activity monthly, such as attending a local town hall meeting or periodically calling your elected official about an issue",
          es:"&nbsp;Algo activa - Usted participa en algún tipo de actividad política mensual, como asistir a una reunión local del ayuntamiento o llamar periódicamente a un funcionario electo sobre un tema",
          fr:"&nbsp;Assez active - Je participe à une sorte d’activité politique tous les mois, par exemple en assistant une réunion publique où se mettant en contact avec votre responsable élue",
          ar:"&nbsp;ناشطة جزئيا- أشارك في شكلٍ من أشكال الأنشطة السياسية بشكل شهري، على سبيل المثال: أحضر اجتماعات محلية دوريا او التواصل مع المسؤولين في مدينتي حول قضايا معينة.&nbsp;"
        }
      }]
    }, {
      type:"checkbox",
      name:"Q1.2",
      title: {
        default:"Select all of the roles below that apply to you at the moment.",
        es:"b.  Seleccione todos los roles que se apliquen a usted en el momento:",
        fr:"Sélectionnez tous les rôles ci-dessous qui vous concernent.",
        ar:"&nbsp;ما هو الدور الذي تقومين بممارسته في الوقت الحالي: (إختاري كل ما ينطبق)&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;Activist",
          es:"&nbsp;Activista",
          fr:"&nbsp;Activiste",
          ar:"&nbsp;ناشطة&nbsp;"
        }
      }, {
        value:"001",
        text: {
          default:"&nbsp;Political party member",
          es:"&nbsp;Miembro de un partido político",
          fr:"&nbsp;Membre d'un parti politique",
          ar:"&nbsp;عضوة في حزب سياسي&nbsp;"
        }
      }, {
        value:"0001",
        text: {
          default:"&nbsp;Election Worker",
          es:"&nbsp;Trabajadora electoral",
          fr:"&nbsp;Agent d'élection",
          ar:"&nbsp;موظّفة انتخابات&nbsp;"
        }
      }, {
        value:"00002",
        text: {
          default:"&nbsp;Political party leader",
          es:"&nbsp;Líder de un partido político",
          fr:"&nbsp;Chef de parti politique",
          ar:"&nbsp;قائدة حزب سياسي&nbsp;"
        }
      }, {
        value:"000002",
        text: {
          default:"&nbsp;Candidate",
          es:"&nbsp;Candidata",
          fr:"&nbsp;Candidate",
          ar:"&nbsp;مرشّحة&nbsp;"
        }
      }, {
        value:"0000002",
        text: {
          default:"&nbsp;Voter",
          es:"&nbsp;Votante",
          fr:"&nbsp;Électrice",
          ar:"&nbsp;ناخبة&nbsp;"
        }
      }, {
        value:"00000003",
        text: {
          default:"&nbsp;Elected representative (any level)",
          es:"&nbsp;Representante de un cargo de elección popular (cualquier nivel)",
          fr:"&nbsp;Représentante élue (tout niveau)",
          ar:"&nbsp;ممثّلة منتخَبة (جميع المستويات)&nbsp;"
        }
      }, {
        value:"000000002",
        text: {
          default:"&nbsp;Civil Servant",
          es:"&nbsp;Funcionaria pública",
          fr:"&nbsp;Fonctionnaire",
          ar:"&nbsp;موظّفة حكومية&nbsp;"
        }
      }, {
        value:"0000000003",
        text: {
          default:"&nbsp;Government Minister",
          es:"&nbsp;Ministra/Secretaria de Gobierno",
          fr:"&nbsp;Ministre du gouvernement",
          ar:"&nbsp;وزيرة في الحكومة&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q1.3",
      title: {
        default:"Are you a member of the governing party/coalition or of an opposition party/coalition?",
        es:"¿Es usted miembro del partido o de la coalición gobernante o de un partido o una coalición de oposición",
        fr:"Êtes-vous membre du parti / de la coalition au pouvoir ou d’un parti / de la coalition de l’opposition?",
        ar:"&nbsp;هل أنت عضو في الحزب/الائتلاف الحاكم أم في حزب/ائتلاف معارض؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"00",
        text: {
          default:"&nbsp;Neither",
          es:"&nbsp;No",
          fr:"&nbsp;Ni l'un ni l'autre",
          ar:"&nbsp;لست عضواً في أيٍّ منهما&nbsp;"
        }
      }, {
        value:"001",
        text: {
          default:"&nbsp;Governing",
          es:"&nbsp;Gobernante",
          fr:"&nbsp;Gouvernant",
          ar:"&nbsp;الحاكم&nbsp;"
        }
      }, {
        value:"0002",
        text: {
          default:"&nbsp;Opposition",
          es:"&nbsp;De oposición",
          fr:"&nbsp;Opposition",
          ar:"&nbsp;المعارضة&nbsp;"
        }
      }]
    }, {
      type:"checkbox",
      name:"Q1.4",
      title: {
        default:"How do you usually engage in politics? (Select all that apply)",
        es:"¿Cómo participa normalmente en la política? (Seleccione todas las que apliquen)",
        fr:"Comment vous engagez-vous habituellement en politique? (Sélectionnez tout ce qui s'applique)",
        ar:"&nbsp;كيف تشاركين عادةً في العمل السياسي؟ (إختاري كل ما ينطبق)&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"02",
        text: {
          default:"&nbsp;I am new to politics and still looking for how best I can contribute",
          es:"&nbsp;Soy nueva en la política y sigo buscando la mejor manera en la que puedo contribuir",
          fr:"&nbsp;Je suis nouvelle en politique et je cherche toujours comment je peux contribuer",
          ar:"&nbsp;أنا حديثة العهد في المجال السياسي وما زلت أبحث عن أفضل السبل للمساهمة&nbsp;"
        }
      }, {
        value:"001",
        text: {
          default:"&nbsp;I post anonymously online",
          es:"&nbsp;Hago publicaciones en línea de manera anónima",
          fr:"&nbsp;Je poste anonymement en ligne",
          ar:"&nbsp;أنشر آراءً مجهولة الهوية عبر الإنترنت&nbsp;"
        }
      }, {
        value:"0003",
        text: {
          default:"&nbsp;I post and comment online with my true identity",
          es:"&nbsp;Hago publicaciones y comentarios en línea con mi verdadera identidad",
          fr:"&nbsp;Je poste et commente en ligne avec ma véritable identité",
          ar:"&nbsp;أنشر آراءً وتعليقاتٍ عبر الإنترنت مستخدمةً هويّتي الحقيقية&nbsp;"
        }
      }, {
        value:"00001",
        text: {
          default:"&nbsp;I attend regular meetings and town halls",
          es:"&nbsp;Acudo a reuniones y asambleas públicas periódicas",
          fr:"&nbsp;J'assiste aux réunions régulières et aux mairies",
          ar:"&nbsp;أشارك في اجتماعات ولقاءات عامة بانتظام&nbsp;"
        }
      }, {
        value:"000001",
        text: {
          default:"&nbsp;I vote in local or national elections",
          es:"&nbsp;Voto en las elecciones locales o nacionales",
          fr:"&nbsp;Je vote aux élections locales ou nationales",
          ar:"&nbsp;أصوّت في الانتخابات البلدية أو الوطنية&nbsp;"
        }
      }, {
        value:"0000002",
        text: {
          default:"&nbsp;I promote my cause on the street (for example, handing out flyers, going door to door, canvassing)",
          es:"&nbsp;Promuevo mi causa en las calles (por ejemplo, reparto folletos, voy de puerta en puerta, hago cambaceo)",
          fr:"&nbsp;Je fais la promotion de ma cause dans la rue (par exemple, distribuer des dépliants, faire du porte-à-porte, faire du porte-à-porte électoral)",
          ar:"&nbsp;أناصر القضية التي أؤمن بها في الشارع (مثلاً، أقوم بتوزيع منشورات، أزور الناس في منازلهم.)&nbsp;"
        }
      }, {
        value:"00000002",
        text: {
          default:"&nbsp;I participate in protests and rallies",
          es:"&nbsp;Participo en protestas y mítines",
          fr:"&nbsp;Je participe à des manifestations et rassemblements",
          ar:"&nbsp;أشارك في تظاهرات ومسيرات&nbsp;"
        }
      }, {
        value:"000000001",
        text: {
          default:"&nbsp;I work behind the scenes; I am known by many in my organization/party, but not well known in my community",
          es:"&nbsp;Trabajo tras bambalinas; soy muy conocida en mi organización o partido, mas no en mi comunidad",
          fr:"&nbsp;Je travaille dans les coulisses; je suis connu par beaucoup dans mon organisation / parti, mais pas très connu dans ma communauté",
          ar:"&nbsp;أعمل وراء الكواليس؛ أنا معروفة في منظّمتي/حزبي لكنني لست معروفة على مستوى مجتمعي المحلي&nbsp;"
        }
      }, {
        value:"0000000003",
        text: {
          default:"&nbsp;I engage in public decision-making",
          es:"&nbsp;Participo en la toma de decisiones públicas",
          fr:"&nbsp;Je participe à la prise de décision publique",
          ar:"&nbsp;أشارك في عمليات صنع القرار العام&nbsp;"
        }
      }, {
        value:"00000000003",
        text: {
          default:"&nbsp;I participate in public events as a primary or the only speaker",
          es:"&nbsp;Participo en eventos públicos como la única oradora o la oradora principal",
          fr:"&nbsp;Je participe à des événements publics comme la principale ou seule oratrice",
          ar:"&nbsp;أشارك في المناسبات العامة بصفتي المتحدّثة الرئيسية&nbsp;"
        }
      }, {
        value:"000000000003",
        text: {
          default:"&nbsp;I am involved in many activities as a political leader; I am prominent in my organization/party and my community",
          es:"&nbsp;Participo en muchas actividades como líder político; soy una persona importante en mi organización o partido y en mi comunidad",
          fr:"&nbsp;Je suis impliquée dans de nombreuses activités en tant que leader politique ; je suis proéminente dans mon organisation / parti et ma communauté",
          ar:"&nbsp;أشارك في عدّة أنشطة كقائدة سياسية؛ أنا شخصٌية معروفة في منظّمتي/حزبي ومجتمعي المحلي&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q1.5",
      title: {
        default:"Are you the first woman in your family to engage in political activity?",
        es:"¿Es usted la primera mujer en su familia en participar en actividades políticas?",
        fr:"Êtes-vous la première femme de votre famille à vous engager dans une activité politique?",
        ar:"&nbsp;هل أنت أوّل امرأة في أسرتك تعمل في نشاط سياسي؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"03",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"001",
        text: {
          default:"&nbsp;No",
          es:"&nbsp;No",
          fr:"&nbsp;Non",
          ar:"&nbsp;كلا&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q1.6",
      title: {
        default:"Are you aware of women’s legal rights in your country (for example, the right to vote or run for office, and, laws outlawing violence against women)?",
        es:"¿Conoce usted los derechos legales de las mujeres en su país (por ejemplo, el derecho a votar o postularse como candidata, las leyes que prohíben la violencia contra las mujeres)?",
        fr:"Connaissez-vous les droits légaux des femmes dans votre pays (par exemple, le droit de voter ou de vous présenter aux élections, les lois interdisant la violence contre les femmes)?",
        ar:"&nbsp;هل تدركين ما هي حقوق المرأة القانونية في بلدك (مثلاً حقّ التصويت أو الترشّح لمنصب، أو القوانين التي تجرّم العنف ضدّ المرأة.)؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;Some of them",
          es:"&nbsp;Algunos de ellos",
          fr:"&nbsp;Certains d'entre eux",
          ar:"&nbsp;بعضها&nbsp;"
        }
      }, {
        value:"0003",
        text: {
          default:"&nbsp;No",
          es:"&nbsp;No",
          fr:"&nbsp;Non",
          ar:"&nbsp;كلا&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q1.7",
      title: {
        default:"Do you advocate on women’s issues?",
        es:"¿Aboga por asuntos relativos a la mujer?",
        fr:"Défendez-vous les causes des femmes?",
        ar:"&nbsp;هل تدافعين عن قضايا المرأة؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"02",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"000",
        text: {
          default:"&nbsp;No",
          es:"&nbsp;No",
          fr:"&nbsp;Non",
          ar:"&nbsp;كلا&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q1.8",
      title: {
        default:"Do you advocate on issues that people think are sensitive or controversial issues?",
        es:"¿Aboga usted por asuntos considerados delicados o polémicos?",
        fr:"Est-ce que vous préconisez des questions que les gens perçoivent comme des questions sensibles ou controversées?",
        ar:"&nbsp;هل تدافعين عن القضايا التي يراها المجتمع حساسة أو مثيرة للجدل؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"03",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"000",
        text: {
          default:"&nbsp;No",
          es:"&nbsp;No",
          fr:"&nbsp;Non",
          ar:"&nbsp;كلا&nbsp;"
        }
      }]
    }]
  }, {
    name:"SCT1.2",
    title: {
      default:"A.  ABOUT YOU",
      es:"A.  ACERCA DE USTED",
      fr:"A.  À PROPOS DE VOUS",
      ar:"&nbsp;عن نفسك&nbsp;"
    },
    questions: [{
      type:"radiogroup",
      name:"Q1.9",
      title: {
        default:"What is your political organization like?",
        es:"¿Cómo es su organización política?",
        fr:"À quoi ressemble votre organisation politique?",
        ar:"&nbsp;ما هو المجال السياسي الذي تعملين فيه؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"03",
        text: {
          default:"&nbsp;I am an individual activist",
          es:"&nbsp;Soy una activista individual",
          fr:"&nbsp;Je suis activiste individuelle",
          ar:"&nbsp;أنا ناشطة مستقلة&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;I work with an organization of men and women",
          es:"&nbsp;Trabajo con una organización de hombres y mujeres",
          fr:"&nbsp;Je travaille avec une organisation d'hommes et de femmes",
          ar:"&nbsp;أعمل مع منظّمة تضمّ رجالاً ونساءً&nbsp;"
        }
      }, {
        value:"0002",
        text: {
          default:"&nbsp;I work with an organization of mainly women",
          es:"&nbsp;Trabajo con una organización principalmente de mujeres",
          fr:"&nbsp;Je travaille avec une organisation principalement féminine",
          ar:"&nbsp;أعمل مع منظّمة تضمّ نساءً بشكلٍ أساسي&nbsp;"
        }
      }, {
        value:"00002",
        text: {
          default:"&nbsp;I am a political party member",
          es:"&nbsp;Soy miembro de un partido político",
          fr:"&nbsp;Je suis membre d'un parti politique",
          ar:"&nbsp;أنا عضوٌ في حزب سياسي&nbsp;"
        }
      }, {
        value:"000003",
        text: {
          default:"&nbsp;I am a member of a women’s political party",
          es:"&nbsp;Soy miembro de un partido político de mujeres",
          fr:"&nbsp;Je suis membre d'un parti politique féminin",
          ar:"&nbsp;أنا عضوٌ في حزبٍ سياسي نسائي&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q1.10",
      title: {
        default:"Do you feel safe while participating in politics?",
        es:"¿Se siente segura cuando participa en la política?",
        fr:"Vous sentez-vous en sécurité en participant à la politique?",
        ar:"&nbsp;هل تشعرين بالأمان عند المشاركة في السياسة؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;Sometimes",
          es:"&nbsp;A veces",
          fr:"&nbsp;Parfois",
          ar:"&nbsp;أحياناً&nbsp;"
        }
      }, {
        value:"0003",
        text: {
          default:"&nbsp;No",
          es:"&nbsp;No",
          fr:"&nbsp;Non",
          ar:"&nbsp;كلا&nbsp;"
        }
      }]
    }, {
      type:"checkbox",
      name:"Q1.11",
      title: {
        default:"Have you experienced any of the following __***<u>in, or as a result of</u>***__, your political work? (Select all that apply)",
        es:"¿Alguna vez ha experimentado alguna de las siguientes situaciones __***<u>en su trabajo político o como resultado de este</u>***__? (Seleccione todas las que apliquen)",
        fr:"Avez-vous ressenti l’un des éléments suivants dans le cadre de votre travail politique ou à la suite de celui-ci? (Sélectionnez tout ce qui s’applique)",
        ar:"&nbsp;هل اختبرت أيّاً مما يلي في عملك السياسي أو نتيجةً له؟ (إختاري كل ما ينطبق عليك)&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"02",
        text: {
          default:"&nbsp;I have experienced some harassment, such as namecalling, repeated phone calls, disruption of my events, persistent or unwanted comments",
          es:"&nbsp;He sufrido algo de acoso, como apodos ofensivos, llamadas telefónicas constantes, interrupciones en mis eventos, comentarios persistentes o no deseados",
          fr:"&nbsp;J’ai subi du harcèlement, sous forme d’insultes, d’appels téléphoniques répétés, de perturbations de mes événements, de commentaires persistants ou indésirables",
          ar:"&nbsp;تعرّضت للمضايقة، مثلاً عبر استخدام النعوت القبيحة أو الاتصالات الهاتفية المتكررة، أو زرع الاضطرابات في المناسبات التي أنظّمها، أو الإدلاء بتعليقات مستمرّة أو غير مرغوب فيها.&nbsp;"
        }
      }, {
        value:"003",
        text: {
          default:"&nbsp;I have been repeatedly harassed",
          es:"&nbsp;Me han acosado en repetidas ocasiones",
          fr:"&nbsp;J’ai été harcelée à plusieurs reprises",
          ar:"&nbsp;تعرّضت لمضايقات مستمرّة&nbsp;"
        }
      }, {
        value:"0002",
        text: {
          default:"&nbsp;People have spread rumors about my private life, such as my sexual orientation, or claimed that I slept with men to advance my career or my political goals",
          es:"&nbsp;La gente ha difundido rumores sobre mi vida personal, como mi orientación sexual, o han alegado que me acosté con hombres para avanzar en mi carrera o en mis metas políticas",
          fr:"&nbsp;Des gens ont répandu des rumeurs sur ma vie privée, comme mon orientation sexuelle, ou ont prétendu que je couchais avec des hommes pour faire avancer ma carrière ou mes objectifs politiques",
          ar:"&nbsp;نشر أشخاصٌ شائعاتٍ عن حياتي الخاصة، كميولي الجنسية، أو زعموا أنني أقمت علاقات مع رجال للتقدّم في مسيرتي المهنية أو تحقيق أهدافي السياسية&nbsp;"
        }
      }, {
        value:"00002",
        text: {
          default:"&nbsp;I have been threatened with economic violence, such as job loss",
          es:"&nbsp;Me han amenazado con violencia económica como pérdida de trabajo",
          fr:"&nbsp;J’ai été menacée de violence économique, comme la perte d’un emploi",
          ar:"&nbsp;تعرضت للتهديد من ناحية اقتصادية، مثلا فقدان وظيفتي.&nbsp;"
        }
      }, {
        value:"000002",
        text: {
          default:"&nbsp;I have been threatened with divorce",
          es:"&nbsp;He sido amenazada con el divorcio",
          fr:"&nbsp;J’ai été menacée de divorce",
          ar:"&nbsp;تعرضت للتهديد بالطلاق.&nbsp;"
        }
      }, {
        value:"0000003",
        text: {
          default:"&nbsp;I have received threats of violence or retribution",
          es:"&nbsp;He recibido amenazas de violencia o represalias",
          fr:"&nbsp;J’ai reçu des menaces de violence ou de représailles",
          ar:"&nbsp;تلقّيت تهديدات بالعنف أو الانتقام&nbsp;"
        }
      }, {
        value:"00000002",
        text: {
          default:"&nbsp;Members of my family (such as my children) have been threatened",
          es:"&nbsp;Miembros de mi familia (como mis hijos) han sido amenazados",
          fr:"&nbsp;Les membres de ma famille (tels que mes enfants) ont été menacés",
          ar:"&nbsp;تعرّض أعضاء في أسرتي (كأولادي مثلاً) للتهديد&nbsp;"
        }
      }, {
        value:"000000002",
        text: {
          default:"&nbsp;I have been smeared in the media",
          es:"&nbsp;He sido atacada/acosada en los medios",
          fr:"&nbsp;J’ai été barbouillée dans les médias",
          ar:"&nbsp;تم التشهير بسمعتي في وسائط الاعلام.&nbsp;"
        }
      }, {
        value:"0000000003",
        text: {
          default:"&nbsp;I have been physically attacked",
          es:"&nbsp;Me han atacado físicamente",
          fr:"&nbsp;J’ai été attaquée physiquement",
          ar:"&nbsp;تعرّضتُ لاعتداء جسديّ&nbsp;"
        }
      }, {
        value:"00000000003",
        text: {
          default:"&nbsp;I have been stalked, either in-person or online (for example, someone has repeatedly shown up to follow me or my family, or has done or said threatening things to me or my family)",
          es:"&nbsp;Me han acechado, ya sea en persona o en línea (por ejemplo, alguien me ha seguido o ha seguido a mi familia en repetidas ocasiones, o ha hecho o dicho cosas para amenazar a mí o a mi familia)",
          fr:"&nbsp;J’ai été harcelée, soit en personne ou en ligne (par exemple, quelqu’un s’est montré à plusieurs reprises pour me suivre ou suivre ma famille, ou a fait ou dit des choses menaçantes contre moi ou ma famille)",
          ar:"&nbsp;تعرّضتُ للترصّد أو المطاردة المستمرّة شخصياً أو عبر الإنترنت (مثلاً أقدم شخص ما على ملاحقتي أو ملاحقة أسرتي بشكلٍ متكرّر، أو قام أو قال بأشياء تهدّدني أو تهدّد أسرتي)&nbsp;"
        }
      }, {
        value:"000000000003",
        text: {
          default:"&nbsp;I have been threatened, harassed, or attacked by a family member",
          es:"&nbsp;He sido amenazada, acosada o atacada por un familiar",
          fr:"&nbsp;J’ai été menacée, harcelée ou attaquée par un membre de ma famille",
          ar:"&nbsp;تعرّضتُ للتهديد أو المضايقة أو اعتداء من قبل أحد أفراد الأسرة&nbsp;"
        }
      }, {
        value:"0000000000003",
        text: {
          default:"&nbsp;I have been detained or questioned by the police or security forces",
          es:"&nbsp;La policía o las fuerzas de seguridad me han detenido o interrogado",
          fr:"&nbsp;J’ai été détenue ou interrogée par la police ou les forces de sécurité",
          ar:"&nbsp;تعرّضتُ للاحتجاز أو الاستجواب من قبل الشرطة أو قوى أمنية&nbsp;"
        }
      }, {
        value:"0000000000000",
        text: {
          default:"&nbsp;No, I have never experienced any harassment, threats, or attacks",
          es:"&nbsp;No, nunca he sufrido acoso, amenazas ni ataques",
          fr:"&nbsp;Non, je n’ai jamais subi de harcèlement, de menaces ou d’attaques",
          ar:"&nbsp;كلا، لم أتعرّض لأي مضايقة أو تهديد أو اعتداء&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q1.12",
      title: {
        default:"Have you witnessed any violence directed toward any other women in politics?",
        es:"¿Ha sido usted testigo de cualquier violencia dirigida hacia alguna otra mujer en la política?",
        fr:"Avez-vous été témoin de violence dirigée contre d'autres femmes en politique?",
        ar:"&nbsp;هل شهدت على أيّ أعمال عنف موجّهة نحو نساء أخريات في السياسة؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"03",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"000",
        text: {
          default:"&nbsp;No",
          es:"&nbsp;No",
          fr:"&nbsp;Non",
          ar:"&nbsp;كلا&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q1.13",
      title: {
        default:"Are the threats, harassment or physical attacks getting worse as you become more active in politics?",
        es:"Como resultado de un aumento de su actividad política, ¿las amenazas, el acoso o los ataques físicos han empeorado?",
        fr:"En raison d’une augmentation de votre activité politique, les menaces, le harcèlement ou les attaques physiques empirent-ils?",
        ar:"&nbsp;هل تزداد التهديدات أو المضايقات أو الاعتداءات الجسدية عندما تكونين أكثر نشاطا في المجال السياسي؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"03",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"000",
        text: {
          default:"&nbsp;No",
          es:"&nbsp;No",
          fr:"&nbsp;Non",
          ar:"&nbsp;كلا&nbsp;"
        }
      }, {
        value:"0000",
        text: {
          default:"&nbsp;I have not experienced any threats, harassment or physical attacks as a result of political activity",
          es:"&nbsp;No he sufrido ninguna amenaza, acoso ni ataques físicos como resultado de mi actividad política",
          fr:"&nbsp;Je n’ai subi aucune menace, harcèlement ou agression physique à la suite d’une activité politique",
          ar:"&nbsp;لم أتعرّض لأيّة تهديدات أو مضايقات أو اعتداءات جسدية كنتيجة لنشاط سياسي&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q1.14",
      title: {
        default:"Do you have a supportive network?",
        es:"¿Cuenta con una red de apoyo?",
        fr:"Avez-vous un réseau de soutien?",
        ar:"&nbsp;هل لديك شبكة داعمة؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;Yes (for example: my family, friends, and coworkers support my political activity)",
          es:"&nbsp;Sí (por ejemplo: mi familia, mis amigos y colegas apoyan mi actividad política)",
          fr:"&nbsp;Oui (par exemple : ma famille, mes amis et mes collègues soutiennent mon activité politique)",
          ar:"&nbsp;نعم (مثلاً: تدعم أسرتي، وأصدقائي، وزملائي نشاطي السياسي)&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;Mixed (for example: some family, friends, and coworkers disapprove of my political activity)",
          es:"&nbsp;Mixta (por ejemplo: algunos familiares, amigos y colegas no aprueban mi actividad política)",
          fr:"&nbsp;Mixte (par exemple : certains membres de la famille, amis et collègues désapprouvent mon activité politique)",
          ar:"&nbsp;جواب مختلط (مثلاً: يعارض بعض أفراد الأسرة، والأصدقاء، والزملاء نشاطي السياسي)&nbsp;"
        }
      }, {
        value:"0003",
        text: {
          default:"&nbsp;No (for example: my family, friends, and coworkers all disapprove of my political activity)",
          es:"&nbsp;No (por ejemplo: mi familia entera, todos mis amigos y colegas no aprueban mi actividad política)",
          fr:"&nbsp;Non (par exemple : ma famille, mes amis et mes collègues désapprouvent toutes mes activités politiques)",
          ar:"&nbsp;كلا (مثلاً:/يعارض كافة بعض أفراد الأسرة، والأصدقاء، والزملاء نشاطي السياسي)&nbsp;"
        }
      }]
    }, {
      type:"checkbox",
      name:"Q1.15",
      title: {
        default:"Do you identify as any of the following? (Select all that apply)",
        es:"¿Se identifica usted con alguna de las siguientes categorías? (Seleccione todos los que apliquen)",
        fr:"Vous identifiez-vous comme suit? (Sélectionnez tout ce qui s’y rapporte)",
        ar:"&nbsp;هل ترين نفسك كأيٍّ مما يلي؟ (إختاري كل ما ينطبق عليك)&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;Under 30 years old",
          es:"&nbsp;Menor de 30 años",
          fr:"&nbsp;Moins de 30 ans",
          ar:"&nbsp;عمري ما دون الثلاثين عاماً&nbsp;"
        }
      }, {
        value:"001",
        text: {
          default:"&nbsp;Racial, ethnic, or religious minority",
          es:"&nbsp;Miembro de una minoría racial, étnica o religiosa",
          fr:"&nbsp;Minorité raciale, ethnique ou religieuse",
          ar:"&nbsp;أنتمي إلى أقلية عرقية أو إثنية أو دينية&nbsp;"
        }
      }, {
        value:"0001",
        text: {
          default:"&nbsp;Member of an indigenous group",
          es:"&nbsp;Miembro de algún grupo indígena",
          fr:"&nbsp;Membre d'un groupe autochtone",
          ar:"&nbsp;أنتمي إلى إحدى جماعات السكّان الأصليين&nbsp;"
        }
      }, {
        value:"00001",
        text: {
          default:"&nbsp;Poor",
          es:"&nbsp;Pobre",
          fr:"&nbsp;Pauvre",
          ar:"&nbsp;أنتمي إلى الطبقة الفقيرة&nbsp;"
        }
      }, {
        value:"000001",
        text: {
          default:"&nbsp;Rural",
          es:"&nbsp;Campesina",
          fr:"&nbsp;Rurale",
          ar:"&nbsp;ابنة الريف&nbsp;"
        }
      }, {
        value:"0000001",
        text: {
          default:"&nbsp;Basic education or not literate",
          es:"&nbsp;Persona con educación básica o analfabeta",
          fr:"&nbsp;Éducation de base ou analphabète",
          ar:"&nbsp;تابعت تعليماً أساسياً أو غير متعلمة&nbsp;"
        }
      }, {
        value:"00000001",
        text: {
          default:"&nbsp;Pregnant",
          es:"&nbsp;Embarazada",
          fr:"&nbsp;Enceinte",
          ar:"&nbsp;حامل&nbsp;"
        }
      }, {
        value:"000000001",
        text: {
          default:"&nbsp;Financially dependent on someone else",
          es:"&nbsp;Dependiente económico de alguien más",
          fr:"&nbsp;Financièrement dépendante de quelqu'un d'autre",
          ar:"&nbsp;أعتمد مالياً على شخص آخر&nbsp;"
        }
      }, {
        value:"0000000001",
        text: {
          default:"&nbsp;Lesbian",
          es:"&nbsp;Lesbiana",
          fr:"&nbsp;Lesbiennes",
          ar:"&nbsp;مثلية&nbsp;"
        }
      }, {
        value:"00000000001",
        text: {
          default:"&nbsp;Bisexual",
          es:"&nbsp;Bisexual",
          fr:"&nbsp;Bisexuelle",
          ar:"&nbsp;ثنائية الجنس&nbsp;"
        }
      }, {
        value:"000000000001",
        text: {
          default:"&nbsp;Transwoman",
          es:"&nbsp;Mujer transgénero",
          fr:"&nbsp;Trans-femme",
          ar:"&nbsp;متحوّلة جنسياً&nbsp;"
        }
      }, {
        value:"0000000000001",
        text: {
          default:"&nbsp;Disabled",
          es:"&nbsp;Persona con discapacidad",
          fr:"&nbsp;Handicapée",
          ar:"&nbsp;امرأة ذات إعاقة&nbsp;"
        }
      }, {
        value:"00000000000001",
        text: {
          default:"&nbsp;Single//Divorced/Widowed",
          es:"&nbsp;Soltera/divorciada/viuda",
          fr:"&nbsp;Célibataire // Divorcée / Veuve",
          ar:"&nbsp;عازبة/ مطلّقة/ أرملة&nbsp;"
        }
      }, {
        value:"000000000000001",
        text: {
          default:"&nbsp;Mother",
          es:"&nbsp;Madre",
          fr:"&nbsp;Mère",
          ar:"&nbsp;أمّ&nbsp;"
        }
      }, {
        value:"0000000000000001",
        text: {
          default:"&nbsp;Primary means of support for children or other dependents",
          es:"&nbsp;Fuente principal de manutención de los hijos u otros dependientes",
          fr:"&nbsp;Principaux moyens de subsistance pour les enfants ou autres personnes à charge",
          ar:"&nbsp;أنت مصدر الرزق الأساسي لأطفال أو أشخاص آخرين عليك اعالتهم&nbsp;"
        }
      }]
    }]
  }, {
    name:"SCT2.1",
    title: {
      default:"B.  ABOUT POLITICS AND THE LAW",
      es:"B.  IDENTIFICADORES INSTITUCIONALES DE RIESGO",
      fr:"B.  A PROPOS DE LA POLITIQUE ET DE LA LOI",
      ar:"&nbsp;المجال السياسي والقوانين&nbsp;"
    },
    questions: [{
      type:"checkbox",
      name:"Q2.1",
      title: {
        default:"Are women in politics where you live often sexualized or presented as sexual objects? For example, are they assumed to be using sex to move forward in position, or can they be used as decorations to add “sex appeal” to political events? (Select all that apply)",
        es:"¿Las mujeres en política alrededor suyo a menudo son sexualizadas o son presentadas como objetos sexuales? Por ejemplo, ¿se supone que están usando el sexo para avanzar en su posición, o pueden ser usadas como decoraciones para agregar “sex appeal” a los eventos políticos? (Seleccione todas las que correspondan)",
        fr:"Les femmes en politique où vous vivez sont-elles souvent sexualisées ou présentées comme des objets sexuels ? Par exemple, sont-elles supposées d’avoir utilisé le sexe a n d‘avancer dans la position, ou peuvent-elles être utilisées comme décorations pour ajouter un « sex-appeal » aux événements politiques? (Sélectionnez tout ce qui s’y rapporte)",
        ar:"&nbsp;هل يعامل مجتمعك النساء العاملات في الحقل السياسي عادة على اساس جنسي او يقدمهن كسلع جنسية؟ على سبيل المثال، هل يضن المجتمع أن النساء يستخدمن الجنس كوسيلة للحصول على مكاسب سياسية؟ أو هل يتم استخدامهن كواجهة لإضفاء طابع ذو جاذبية جنسية للأحداث أو الحملات الانتخابية؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"02",
        text: {
          default:"&nbsp;Yes, women in politics are often presented as sexual objects",
          es:"&nbsp;Sí, las mujeres en la política a menudo son presentadas como objetos sexuales",
          fr:"&nbsp;Oui, les femmes en politique sont souvent présentées comme des objets sexuels",
          ar:"&nbsp;نعم، ينظر للمرأة على أساس جنسي في المجال السياسي.&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;Yes, women in politics are often assumed to be seeking more power by using sex",
          es:"&nbsp;Sí, a menudo se supone que las mujeres en política busquen más poder usando el sexo",
          fr:"&nbsp;Oui, les femmes en politique sont souvent supposées chercher plus de pouvoir en utilisant le sexe",
          ar:"&nbsp;نعم، يعتقد الناس ان المرأة تقدم تنازلات جسدية للحصول على المزيد من السلطة.&nbsp;"
        }
      }, {
        value:"0001",
        text: {
          default:"&nbsp;Not specifically in politics, but women are often depicted as “sexy” or as sexual objects in other public spaces, such as advertisements",
          es:"&nbsp;No es un problema específico en política, pero las mujeres a menudo son representadas como “sexy” o como objetos sexuales en otros espacios públicos, como anuncios",
          fr:"&nbsp;Ce n’est pas un problème en politique spéci quement, dans la vie politique mais les femmes sont souvent dépeintes comme « sexy » ou comme des objets sexuels dans d’autres espaces publics, tels que des publicités",
          ar:"&nbsp;ليس في المجال السياسي بالتحديد، لكن دائما ما يتم اظهار النساء كسلعة جنسية او بشكل مثير للغرائز في المجالات الاخرى مثل مجال الاعلانات.&nbsp;"
        }
      }, {
        value:"00000",
        text: {
          default:"&nbsp;No, women in politics are not sexualized or presented as sexual objects publicly",
          es:"&nbsp;No, las mujeres en política no son sexualizadas ni son presentadas como objetos sexuales públicamente",
          fr:"&nbsp;Non, les femmes en politique ne sont pas sexualisées ou présentées comme des objets sexuels",
          ar:"&nbsp;كلا، لا ينظر للمرأة على أساس جنسي في المجال السياسي او في المجالات العامة.&nbsp;"
        }
      }]
    }, {
      type:"checkbox",
      name:"Q2.2",
      title: {
        default:"Are any of the following political activities currently occurring in your country?  (Select all that apply)",
        es:"¿Alguna de las siguientes actividades políticas está sucediendo actualmente en su país? (Seleccione todas las que apliquen)",
        fr:"L'une des activités politiques suivantes est-elle en cours dans votre pays? (Sélectionnez tout ce qui s'applique)",
        ar:"&nbsp;هل تشهد بلادك أيّاً من الأنشطة السياسية التالية حالياً؟ (إختاري كل ما ينطبق)&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;An election",
          es:"&nbsp;Elecciones",
          fr:"&nbsp;Une élection",
          ar:"&nbsp;انتخابات&nbsp;"
        }
      }, {
        value:"001",
        text: {
          default:"&nbsp;A referendum",
          es:"&nbsp;Referéndum",
          fr:"&nbsp;Un référendum",
          ar:"&nbsp;استفتاء&nbsp;"
        }
      }, {
        value:"0002",
        text: {
          default:"&nbsp;Political transition",
          es:"&nbsp;Transición política",
          fr:"&nbsp;Transition politique",
          ar:"&nbsp;انتقال سياسي&nbsp;"
        }
      }, {
        value:"00002",
        text: {
          default:"&nbsp;Implementation of a controversial policy or trial of a controversial court case",
          es:"&nbsp;Implementación de alguna política controvertida o el juicio en tribunales de algún caso controvertido",
          fr:"&nbsp;Mise en œuvre d'une politique controversée ou un procès controversé",
          ar:"&nbsp;تطبيق سياسة مثيرة للجدل أو محاكمة لقضية مثيرة للجدل&nbsp;"
        }
      }, {
        value:"000003",
        text: {
          default:"&nbsp;Disputes over land rights or access to natural resources",
          es:"&nbsp;Disputas por los derechos sobre tierras o el acceso a recursos naturales",
          fr:"&nbsp;Les différends relatifs aux droits fonciers ou à l'accès aux ressources naturelles",
          ar:"&nbsp;منازعات حول حقوق ملكية الأراضي أو الوصول إلى الموارد الطبيعية&nbsp;"
        }
      }, {
        value:"0000003",
        text: {
          default:"&nbsp;Political uprising",
          es:"&nbsp;Revuelta política",
          fr:"&nbsp;Soulèvement politique",
          ar:"&nbsp;انتفاضات سياسية&nbsp;"
        }
      }, {
        value:"00000003",
        text: {
          default:"&nbsp;Violent conflict",
          es:"&nbsp;Conflicto violento",
          fr:"&nbsp;Conflit violent",
          ar:"&nbsp;نزاع عنيف&nbsp;"
        }
      }, {
        value:"000000000",
        text: {
          default:"&nbsp;None of these are currently happening",
          es:"&nbsp;Ninguno de estos está sucediendo actualmente",
          fr:"&nbsp;Aucun de ces évènements ne se passe actuellement",
          ar:"&nbsp;لا يحدث أيٌّ مما سبق&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q2.3",
      title: {
        default:"What type of legal/judicial system operates in your community?",
        es:"¿Qué tipo de sistema legal o judicial opera en su comunidad?",
        fr:"Quel type de système juridique / judiciaire fonctionne dans votre communauté?",
        ar:"&nbsp;ما هو نوع النظام القانوني/القضائي المعمول به في مجتمعك المحلي؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;Formal justice system with police, courts and prisons",
          es:"&nbsp;Sistema de justicia formal con policía, tribunales y prisiones",
          fr:"&nbsp;Système judiciaire formel avec la police, les tribunaux et les prisons",
          ar:"&nbsp;نظام قضائي رسمي يتضمن جهاز شرطة، محاكم وسجون&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;Informal justice system, such as a council of elders, that relies more on mediation and reconciliation",
          es:"&nbsp;Sistema de justicia informal, como un consejo de ancianos que se basa más en la mediación y la reconciliación",
          fr:"&nbsp;Système de justice informel, tel qu’un conseil des anciens, qui repose davantage sur la médiation et la réconciliation",
          ar:"&nbsp;نظام قضائي غير رسمي كمجلس مشايخ مثلاً، يعتمد في الغالب على الموافقات والتسويات&nbsp;"
        }
      }, {
        value:"0002",
        text: {
          default:"&nbsp;Both",
          es:"&nbsp;Ambos",
          fr:"&nbsp;Les deux",
          ar:"&nbsp;كلا النظامين&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q2.4",
      title: {
        default:"What type of law enforcement primarily operates in your community?",
        es:"¿Qué tipo de fuerzas de orden público operan principalmente en su comunidad?",
        fr:"Quel type d'application de la loi fonctionne principalement dans votre communauté?",
        ar:"&nbsp;ما هو نظام تطبيق القانون المعمول به في مجتمعك المحلي؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;Police",
          es:"&nbsp;Policía",
          fr:"&nbsp;Police",
          ar:"&nbsp;الشرطة&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;Other formal or state security force, such as the military",
          es:"&nbsp;Otras fuerzas formales o de seguridad estatal, como el ejército",
          fr:"&nbsp;Autre force de sécurité officielle ou étatique, telle que l'armée",
          ar:"&nbsp;قوات رسمية أو حكومية تابعة للدولة كالجيش مثلا&nbsp;"
        }
      }, {
        value:"0003",
        text: {
          default:"&nbsp;Informal community organization, such as a local militia",
          es:"&nbsp;Organizaciones comunitarias informales como una milicia local",
          fr:"&nbsp;Organisation communautaire informelle, telle qu'une milice locale",
          ar:"&nbsp;تنظيمات غير رسمية، كالميلشيات المحلية&nbsp;"
        }
      }, {
        value:"00003",
        text: {
          default:"&nbsp;None",
          es:"&nbsp;Ninguna",
          fr:"&nbsp;Rien",
          ar:"&nbsp;لا شيء&nbsp;"
        }
      }]
    }, {
      type:"checkbox",
      name:"Q2.5",
      title: {
        default:"Is violence against women a crime where you live? (Select all that apply)",
        es:"¿La violencia contra las mujeres se califica como delito donde usted vive? (Seleccione todas las que apliquen)",
        fr:"La violence contre les femmes est-elle un crime ou vous vivez? (Sélectionnez tout ce qui s’applique)",
        ar:"&nbsp;هل يعتبر العنف ضدّ المرأة جريمة في المجتمع الذي تعيشين فيه؟ (إختاري كل ما ينطبق)&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;Yes, any type of violence against women is against the law",
          es:"&nbsp;Sí, todo tipo de violencia contra las mujeres va en contra de la ley",
          fr:"&nbsp;Oui, tout type de violence contre les femmes est contraire à la loi",
          ar:"&nbsp;نعم، أيّ نوع من العنف ضدّ النساء هو عملٌ مخالفٌ للقانون&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;It is not illegal to threaten or harass a woman at her work, school, on the street or in other public places",
          es:"&nbsp;No es ilegal amenazar o acosar a una mujer en su trabajo, escuela, en la calle o en otros lugares públicos",
          fr:"&nbsp;Il est illégal de menacer ou de harceler une femme à son travail, à l'école, dans la rue ou dans d'autres lieux publics",
          ar:"&nbsp;لا يعتبر تهديد امرأة أو مضايقتها في مكان عملها، أو المدرسة، أو في الشارع، أو في الأماكن العامة، عمل مخالف للقانون&nbsp;"
        }
      }, {
        value:"0002",
        text: {
          default:"&nbsp;It is not illegal for a family member or any person to threaten or harass a woman in her home or another private space",
          es:"&nbsp;No es ilegal que un familiar o persona amenace o acose a una mujer en su casa u otro espacio privado",
          fr:"&nbsp;Il est illégal pour un membre de la famille ou toute personne de menacer ou harceler une femme dans sa maison ou dans un autre espace privé",
          ar:"&nbsp;لا يعتبر تهديد امرأة او مضايقتها في منزلها من قبل أحد افراد الاسرة، عمل مخالف للقانون&nbsp;"
        }
      }, {
        value:"00002",
        text: {
          default:"&nbsp;It is not illegal for any person to physically attack a woman",
          es:"&nbsp;No es ilegal que una persona ataque físicamente a una mujer",
          fr:"&nbsp;Il est illégal pour toute personne d'attaquer physiquement une femme",
          ar:"&nbsp;لا يعتبر الاعتداء على المرأة جسديا عمل مخالف للقانون&nbsp;"
        }
      }, {
        value:"000001",
        text: {
          default:"&nbsp;I don’t know",
          es:"&nbsp;No lo sé",
          fr:"&nbsp;Je ne sais pas",
          ar:"&nbsp;لا أعلم&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q2.6",
      title: {
        default:"If violence against women is a crime, do the police respond to women’s security needs in accordance with the law?",
        es:"Si la violencia contra las mujeres se cali ca como delito, ¿la policía responde a las necesidades de seguridad de las mujeres conforme a la ley?",
        fr:"Si la violence contre les femmes est un crime, la police répond-elle aux besoins de sécurité des femmes conformément à la loi?",
        ar:"&nbsp;إذا كان العنف ضدّ المرأة جريمة، فهل تلبّي الشرطة احتياجات النساء الأمنية بما يتوافق مع القانون؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;Yes, I feel they respond",
          es:"&nbsp;Pienso que sí responden",
          fr:"&nbsp;Oui, je sens qu'elle réponde",
          ar:"&nbsp;نعم، أشعر أنها تفعل ذلك&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;I feel they sometimes respond",
          es:"&nbsp;Pienso que algunas veces responden",
          fr:"&nbsp;Je sens qu'elle réponde parfois",
          ar:"&nbsp;أشعر أنها تفعل ذلك أحياناً&nbsp;"
        }
      }, {
        value:"0003",
        text: {
          default:"&nbsp;No, I do not feel the police respond to women’s security needs",
          es:"&nbsp;No, la policía no responde a las necesidades de seguridad de las mujeres",
          fr:"&nbsp;Non, je ne pense pas que la police réponde aux besoins de sécurité des femmes",
          ar:"&nbsp;كلا، لا أشعر أنّ الشرطة تلبّي احتياجات المرأة الأمنية&nbsp;"
        }
      }, {
        value:"00002",
        text: {
          default:"&nbsp;Women do not call the police",
          es:"&nbsp;Las mujeres no llaman a la policía",
          fr:"&nbsp;Les femmes n'appellent pas la police",
          ar:"&nbsp;لا تتّصل النساء بالشرطة&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q2.7",
      title: {
        default:"Are there other institutions or groups, such as community or religious leaders or political party mechanisms or NGOs, that you can count on to respond effectively to your security needs or offer protection?",
        es:"¿Existen otras instituciones o grupos como líderes comunitarios o religiosos o mecanismos de partidos políticos u ONGs (organización no gubernamental) con los que pueda contar para responder eficazmente a sus necesidades de seguridad o para ofrecer protección? (Seleccione todas las que apliquen)",
        fr:"Existent-ils d’autres institutions ou groupes, tels que des leaders communautaires ou religieux, des mécanismes de partis politiques ou des ONG, sur lesquels vous pouvez compter pour répondre ef cacement à vos besoins de sécurité ou offrir une protection?",
        ar:"&nbsp;هل هناك مؤسسات أو مجموعات يمكنك الاعتماد عليها لتلبية احتياجاتك الأمنية على نحوٍ فعال أو توفير الحماية؟ مثل السلطات الدينية، انظمة احزاب سياسية، أو منظّمات غير حكومية.&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;I don’t know",
          es:"&nbsp;No sé",
          fr:"&nbsp;Je ne sais pas",
          ar:"&nbsp;لا أعلم&nbsp;"
        }
      }, {
        value:"0003",
        text: {
          default:"&nbsp;No, there are no other institutions that respond to my security needs",
          es:"&nbsp;No, no existe ninguna otra organización que responda a mis necesidades de seguridad",
          fr:"&nbsp;Non, il n’y a pas d’autres institutions qui répondent à mes besoins de sécurité",
          ar:"&nbsp;كلا، ليست هناك أية منظّمات لتلبية احتياجاتي الأمنية&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q2.8",
      title: {
        default:"Are there services, such as emergency shelters, safe houses, a hotline or support groups that provide a safe place or support for women in danger or who are victims of violence?",
        es:"¿Existen servicios, como refugios de emergencia, casas de seguridad, una línea directa o grupos de apoyo que brinden un lugar seguro o apoyo para mujeres en peligro o que sean víctimas de violencia?",
        fr:"Existent-ils d’autres services, tels que des abris d’urgence, des lieux sûrs, une hotline ou des groupes de soutien qui offrent un lieu sûr ou un soutien aux femmes en danger ou victimes de violence? (Sélectionnez tout ce qui s’y rapporte)",
        ar:"&nbsp;هل هناك خدماتٍ توفّر مكاناً آمناً أو تقدم الدعم للنساء المعرّضات للخطر أو ضحايا العنف؟ مثل دور حماية، مراكز إيواء، مجموعات دعم او خط ساخن يمكن الاتصال بي للحصول على المساعدة (إختاري كل ما ينطبق)&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;I don’t know",
          es:"&nbsp;No sé",
          fr:"&nbsp;Je ne sais pas",
          ar:"&nbsp;كلا&nbsp;"
        }
      }, {
        value:"0003",
        text: {
          default:"&nbsp;No, there are no services for victims of violence",
          es:"&nbsp;No, no existen servicios para víctimas de violencia",
          fr:"&nbsp;Non, il n'y a pas de services pour les victimes de violence",
          ar:"&nbsp;كلا، لا تتوفر أية خدمات لضحايا العنف&nbsp;"
        }
      }]
    }]
  }, {
    name:"SCT3.1",
    title: {
      default:"C.  ABOUT YOUR COMMUNITY",
      es:"C.  SOBRE SU COMUNIDAD",
      fr:"C.  A PROPOS DE VOTRE COMMUNAUTÉ",
      ar:"&nbsp;العوامل الاجتماعية&nbsp;"
    },
    questions: [{
      type:"radiogroup",
      name:"Q3.1",
      title: {
        default:"Which phrase best describes your community?",
        es:"¿Qué frase mejor describe tu comunidad?",
        fr:"Quelle phrase décrit le mieux votre communauté?",
        ar:"&nbsp;أي من العبارات التالية تصف مجتمعك بشكل دقيق:"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"03",
        text: {
          default:"&nbsp;My community believes a woman should only do her domestic duties in the home and not be in public for any reason",
          es:"&nbsp;Mi comunidad cree que una mujer solo debe hacer sus deberes domésticos en el hogar y no estar en público por ningún motivo",
          fr:"&nbsp;Ma communauté estime qu’une femme ne devrait accomplir ses tâches domestiques qu’à la maison et ne pas être en public pour quelque raison que ce soit",
          ar:"&nbsp;يعتقد مجتمعي المحلي أنّه يجدر بالمرأة السهر على واجباتها الأسرية في المنزل فقط وليس عليها المشاركة في الحياة العامة إلا إذا كان زوجها يسمح بذلك&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;My community believes a woman may work outside the home with the permission of her husband or family",
          es:"&nbsp;Mi comunidad cree que una mujer puede trabajar fuera del hogar con el permiso de su esposo o familia",
          fr:"&nbsp;Ma communauté croit qu’une femme peut travailler à l’extérieur de la maison avec la permission de son mari ou de sa famille",
          ar:"&nbsp;يعتقد مجتمعي المحلي أنّه يمكن للمرأة العمل خارج المنزل إذا حصلت على موافقة زوجها أو أسرتها&nbsp;"
        }
      }, {
        value:"0002",
        text: {
          default:"&nbsp;My community believes a woman may engage in work and politics if she has permission from her husband or family",
          es:"&nbsp;Mi comunidad cree que una mujer puede dedicarse a la política si tiene permiso de su esposo o familia",
          fr:"&nbsp;Ma communauté croit qu’une femme peut s’engager dans le travail si elle a la permission de son mari ou de sa famille",
          ar:"&nbsp;يعتقد مجتمعي المحلي أنّه يمكن للمرأة ممارسة نشاط سياسي إذا حصلت على موافقة زوجها أو أسرتها&nbsp;"
        }
      }, {
        value:"00001",
        text: {
          default:"&nbsp;My community believes a woman may engage in work and politics as long as her domestic duties remain a priority",
          es:"&nbsp;Mi comunidad cree que una mujer puede dedicarse al trabajo y a la política siempre que sus deberes domésticos sigan siendo una prioridad",
          fr:"&nbsp;Ma communauté croit qu’une femme peut s’engager dans le travail et la politique tant que ses tâches domestiques demeurent une priorité",
          ar:"&nbsp;يعتقد مجتمعي المحلي أنّه يمكن للمرأة العمل او المشاركة في العمل السياسي بشرط ان تبقى الاولوية لواجباتها الاسرية.&nbsp;"
        }
      }, {
        value:"000001",
        text: {
          default:"&nbsp;My community believes a woman may freely choose to engage in politics regardless of permissions or domestic duties",
          es:"&nbsp;Mi comunidad cree que una mujer puede elegir libremente participar en política independientemente de los permisos o deberes domésticos",
          fr:"&nbsp;Ma communauté croit qu’une femme peut choisir librement de faire de la politique indépendamment des autorisations ou des tâches domestiques",
          ar:"&nbsp;يعتقد مجتمعي المحلي أنّه للمرأة مطلق الحرية للمشاركة في العمل السياسي بغض النظر عن موافقة العائلة او الواجبات الاسرية&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q3.2",
      title: {
        default:"Does your community consider politics “men’s work,” “dirty,” “dangerous,” or otherwise inappropriate for women?",
        es:"¿Su comunidad considera que la política es “trabajo de hombres”, “sucia” o de alguna otra manera no apta para las mujeres?",
        fr:"Votre communauté considère-t-elle la politique comme « un travail d’homme », « sale » ou inappropriée pour les femmes?",
        ar:"&nbsp;هل ينظر مجتمعك للعمل السياسي على أنه مهنة للرجال فقط أو كمهنة وضيعة وخطيرة، أو كمهنة غير ملائمة للنساء؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"02",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"000",
        text: {
          default:"&nbsp;No",
          es:"&nbsp;No",
          fr:"&nbsp;Non",
          ar:"&nbsp;كلا&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q3.3",
      title: {
        default:"Are women’s daily lives restricted in your community?",
        es:"¿Las vidas diarias de las mujeres están restringidas en su comunidad?",
        fr:"La vie quotidienne des femmes est-elle limitée dans votre communauté?",
        ar:"&nbsp;هل يخضع نشاط المرأة لقيود في مجتمعك المحلي؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"03",
        text: {
          default:"&nbsp;Women are not supposed to leave the home",
          es:"&nbsp;Las mujeres no deben salir de su casa",
          fr:"&nbsp;Les femmes ne sont pas censées quitter la maison",
          ar:"&nbsp;لا يجدر بالمرأة أن تغادر المنزل&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;Women can be in public space, but their travel and attire are restricted",
          es:"&nbsp;Las mujeres pueden estar en la vida pública, pero hay restricciones sobre sus viajes, su atuendo",
          fr:"&nbsp;Les femmes peuvent être dans la vie publique, mais leurs déplacements, vêtements sont limités",
          ar:"&nbsp;يمكن للمرأة أن تشارك في الحياة العامة، لكن لا بدّ من فرض قيود على سفرها ولباسها&nbsp;"
        }
      }, {
        value:"0000",
        text: {
          default:"&nbsp;Women face no societal/social restrictions to their daily lives",
          es:"&nbsp;Las mujeres no enfrentan restricciones societales/ sociales en su vida diaria",
          fr:"&nbsp;Les femmes ne sont confrontées à aucune restriction sociétale / sociale dans leur vie quotidienne",
          ar:"&nbsp;لا تواجه المرأة أية قيود اجتماعية أثناء ممارسة نشاطاتها اليومية.&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q3.4",
      title: {
        default:"Are women often sexualized or presented as sexual objects?  For example, in advertisements, in music or in the media generally.",
        es:"¿Las mujeres a menudo son sexualizadas o son presentadas como objetos sexuales? Por ejemplo, en publicidades, en la música o en los medios en general.",
        fr:"Les femmes sont-elles souvent sexualisées ou présentées comme des objets sexuels (par exemple, dans les publicités, la musique ou dans les médias en générale)?",
        ar:"&nbsp;هل يتمّ غالبا تقديم المرأة في الحياة العامة على أنها سلعة جنسية؟ مثلاً في الاعلانات، مجال الموسيقى او في الاعلام بصورة عامة (إختاري كل ما ينطبق)&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"02",
        text: {
          default:"&nbsp;Yes, women are often presented as sexual objects",
          es:"&nbsp;Sí, las mujeres a menudo son presentadas como objetos sexuales",
          fr:"&nbsp;Oui, les femmes sont souvent présentées comme des objets sexuels",
          ar:"&nbsp;نعم، غالباً ما تُعرض المرأة في الحياة العامة كسلعةٍ جنسيةٍ&nbsp;"
        }
      }, {
        value:"000",
        text: {
          default:"&nbsp;No, women are not sexualized or presented as sexual objects publicly",
          es:"&nbsp;No, las mujeres no son sexualizadas ni son presentan como objetos sexuales públicamente",
          fr:"&nbsp;Non, les femmes ne sont pas sexualisées ou présentées comme des objets sexuels publiquement",
          ar:"&nbsp;كلا، لا يتمّ عرض المرأة كسلعة جنسية في المجالات العامة&nbsp;"
        }
      }]
    }, {
      type:"checkbox",
      name:"Q3.5",
      title: {
        default:"Do women in your community commonly experience some form of harassment, abuse, or violence? (Select all that apply)",
        es:"¿Es común que las mujeres en su comunidad sufran alguna forma de acoso, abuso o violencia? (Seleccione todas las que apliquen)",
        fr:"Les femmes de votre communauté sont-elles souvent victimes de harcèlement, d’abus ou de violence? (Sélectionnez tout ce qui s’applique)",
        ar:"&nbsp;هل تتعرّض النساء في مجتمعك المحلي عادةً لشكلٍ من أشكال المضايقات أو الاستغلال أو العنف؟ (إختاري كل ما ينطبق)&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"02",
        text: {
          default:"&nbsp;Yes, women in my community commonly experience harassment, such as catcalls, and persistent or unwanted comments",
          es:"&nbsp;Sí, las mujeres en mi comunidad normalmente sufren acoso como abucheos e comentarios persistentes o no deseados",
          fr:"&nbsp;Oui, les femmes de ma communauté sont souvent victimes du harcèlement, comme des sif ets, des insultes, des commentaires persistants ou indésirables",
          ar:"&nbsp;نعم، تتعرّض النساء في مجتمعي المحلي للمضايقة بشكل مستمر، مثل المعاكسات اللفظية، والتعليقات غير المرغوب فيها.&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;Yes, women in my community are routinely insulted or defamed (for example, through false accusations made against their morality)",
          es:"&nbsp;Sí, las mujeres de mi comunidad son insultadas o difamadas rutinariamente (por ejemplo, a través de acusaciones falsas contra su moralidad)",
          fr:"&nbsp;Oui, les femmes de ma communauté sont systématiquement insultées ou diffamées (par exemple, par le biais de fausses accusations portées contre leur moralité)",
          ar:"&nbsp;نعم، تتعرّض النساء في مجتمعي المحلي عادةً للتشهير، من خلال إطلاق اتهامات باطلة تمس سمعتهن.&nbsp;"
        }
      }, {
        value:"0003",
        text: {
          default:"&nbsp;Yes, women in my community commonly experience threats, including threats of physical harm",
          es:"&nbsp;Sí, las mujeres en mi comunidad normalmente reciben amenazas, incluyendo amenazas de daño físico",
          fr:"&nbsp;Oui, les femmes de ma communauté subissent généralement des menaces, y compris des menaces de préjudice physique",
          ar:"&nbsp;نعم، تتعرّض النساء في مجتمعي المحلي عادةً للتهديدات، بما في ذلك التهديد بالاعتداء الجسدي.&nbsp;"
        }
      }, {
        value:"00003",
        text: {
          default:"&nbsp;Yes, women in my community commonly experience assaults, such as pushing, groping or unwanted touching",
          es:"&nbsp;Sí, las mujeres en mi comunidad normalmente sufren ataques como empujones, manoseos u otras formas de violencia física",
          fr:"&nbsp;Oui, les femmes de ma communauté traversent souvent les agressions, telles que les poussées, les tâtonnements ou les attouchements indésirables",
          ar:"&nbsp;نعم، تتعرض النساء عادة للمضايقات مثل الدفع، او اللمس الغير مرغوب به.&nbsp;"
        }
      }, {
        value:"000001",
        text: {
          default:"&nbsp;I don’t know",
          es:"&nbsp;No sé",
          fr:"&nbsp;Je ne sais pas",
          ar:"&nbsp;لا أعلم&nbsp;"
        }
      }, {
        value:"0000000",
        text: {
          default:"&nbsp;No, most women I know have never experienced harassment, abuse or violence",
          es:"&nbsp;No, la mayoría de las mujeres que conozco nunca han sufrido acoso, abusos ni violencia",
          fr:"&nbsp;Non, la plupart des femmes que je connais n’ont jamais connu de harcèlement, d’abus ou de violence",
          ar:"&nbsp;كلا، معظم النساء اللواتي أعرفهنّ لم يتعرّضن للمضايقة أو التحرش أو العنف.&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q3.6",
      title: {
        default:"Do male family members experience shame or dishonor as a result of a woman’s political activity?",
        es:"¿Los miembros masculinos de la familia experimentan vergüenza o deshonor como resultado de la actividad política de una mujer?",
        fr:"Les hommes membres de la famille éprouvent-ils de la honte ou du déshonneur en raison de l’activité politique d’une femme?",
        ar:"&nbsp;هل يعتبر عمل المرأة في السياسة وصمة عار لأفراد الاسرة من الرجال؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"03",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"000",
        text: {
          default:"&nbsp;No",
          es:"&nbsp;No",
          fr:"&nbsp;Non",
          ar:"&nbsp;كلا&nbsp;"
        }
      }, {
        value:"0001",
        text: {
          default:"&nbsp;I am not sure",
          es:"&nbsp;No estoy segura",
          fr:"&nbsp;Je ne sais pas",
          ar:"&nbsp;لست متأكدة&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q3.7",
      title: {
        default:"In your community, do women experience abuse or harassment when they perform roles that men usually occupy or when women are considered to be disobeying their family’s wishes? For example, if a woman decides to be a car mechanic or goes to a political rally.",
        es:"En su comunidad, ¿las mujeres sufren abuso o acoso cuando desempeñan roles que normalmente ocupan los hombres o cuando se considera que las mujeres están desobedeciendo los deseos de su familia? Por ejemplo, si una mujer decide ser mecánica o va a un mitin político para protestar.",
        fr:"Dans votre communauté, les femmes subissent-elles des abus ou du harcèlement lorsqu’elles accomplissent des rôles que les hommes occupent habituellement ou lorsque les femmes sont considérées comme désobéissantes aux souhaits de leur famille? Par exemple, si une femme décide d’être mécanicienne d’automobile ou de participer à un rassemblement politique.",
        ar:"&nbsp;هل تتعرّض المرأة في مجتمعك المحلي لسوء المعاملة أو المضايقات عندما تؤدي أدواراً يشغلها الرجال عادةً، أو عندما يُعتبر أنها تعصي رغبات أسرتها على سبيل المثال, أذا قررت المرأة العمل كميكانيكي سيارات أو قررت خوض المعترك السياسي.&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"03",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"000",
        text: {
          default:"&nbsp;No",
          es:"&nbsp;No",
          fr:"&nbsp;Non",
          ar:"&nbsp;كلا&nbsp;"
        }
      }]
    }]
  }, {
    name:"SCT3.2",
    title: {
      default:"C.  ABOUT YOUR COMMUNITY",
      es:"C.  SOBRE SU COMUNIDAD",
      fr:"C.  A PROPOS DE VOTRE COMMUNAUTÉ",
      ar:"&nbsp;العوامل الاجتماعية&nbsp;"
    },
    questions: [{
      type:"radiogroup",
      name:"Q3.8",
      title: {
        default:"In your community, are the police generally trusted to respond to claims of harassment or violence against women?",
        es:"En su comunidad, ¿generalmente se puede confiar en la policía para que responda a las quejas de acoso o violencia contra las mujeres?",
        fr:"Dans votre communauté, la police est-elle généralement réputée répondre aux plaintes de harcèlement ou de violence contre les femmes?",
        ar:"&nbsp;في مجتمعك المحلي، هل تؤتمن الشرطة بشكلٍ عام على التعامل مع بلاغات التحرش أو العنف ضدّ المرأة؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"001",
        text: {
          default:"&nbsp;No",
          es:"&nbsp;No",
          fr:"&nbsp;Non",
          ar:"&nbsp;كلا&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q3.9",
      title: {
        default:"Is there a safe place you can go to if you are in immediate danger?",
        es:"¿Existe algún lugar seguro al que pueda acudir si se encuentra en peligro inminente?",
        fr:"Y a-t-il un endroit sûr où vous pouvez aller si vous êtes en danger immédiat?",
        ar:"&nbsp;هل هناك مكان آمن يمكنك التوجّه إليه إذا تعرضت لخطر وشيك؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;Yes",
          es:"&nbsp;Sí",
          fr:"&nbsp;Oui",
          ar:"&nbsp;نعم&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;No",
          es:"&nbsp;No",
          fr:"&nbsp;Non",
          ar:"&nbsp;كلا&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q3.10",
      title: {
        default:"Which of the following statements best describes your community?",
        es:"¿Cuál de las siguientes afirmaciones mejor describe  a su comunidad?",
        fr:"Lequel des énoncés suivants décrit le mieux votre communauté?",
        ar:"&nbsp;أي العبارات التالية تصف مجتمعك بشكل دقيق:"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"01",
        text: {
          default:"&nbsp;It is a very peaceful place with minimal crime",
          es:"&nbsp;Es un lugar muy pacífico con un mínimo de crimen",
          fr:"&nbsp;C’est un endroit très paisible avec un minimum de criminalité",
          ar:"&nbsp;مكان مسالم جداً يشهد نسبةً متدنيةً من الجريمة&nbsp;"
        }
      }, {
        value:"001",
        text: {
          default:"&nbsp;There are some acts of vandalism, violence",
          es:"&nbsp;Suceden algunos actos de vandalismo, violencia",
          fr:"&nbsp;Il y a des actes de vandalisme, de violence",
          ar:"&nbsp;يشهد بعض حالات التخريب والعنف إلخ.&nbsp;"
        }
      }, {
        value:"0002",
        text: {
          default:"&nbsp;There are widespread incidences of violence by individuals",
          es:"&nbsp;Hay incidencias generalizadas de violencia por parte de individuos",
          fr:"&nbsp;Les cas de violence par des individus sont fréquents",
          ar:"&nbsp;تنتشر حالات التخريب والعنف من قبل الافراد&nbsp;"
        }
      }, {
        value:"00002",
        text: {
          default:"&nbsp;Violence is common and there are gangs and armed groups present",
          es:"&nbsp;La violencia es común y existen pandillas y grupos armados presentes",
          fr:"&nbsp;La violence est fréquente et ils existent des gangs et des groupes armés",
          ar:"&nbsp;انتشار واسع لحالات العنف من قبل مجموعات وعصابات مسلّحة&nbsp;"
        }
      }, {
        value:"000003",
        text: {
          default:"&nbsp;The community is experiencing political or sectarian or extremist violence",
          es:"&nbsp;La comunidad está experimentando violencia política o sectaria o extremista",
          fr:"&nbsp;La communauté connaît une violence politique, sectaire ou extrémiste",
          ar:"&nbsp;يشهد المجتمع حالات من العنف السياسي والطائفي والتطرف.&nbsp;"
        }
      }, {
        value:"0000003",
        text: {
          default:"&nbsp;Everyone has been a victim of violence or knows someone who has",
          es:"&nbsp;Todos han sido o conocen a alguien que ha sido víctima de la violencia",
          fr:"&nbsp;Oui, tout le monde a été victime d’un crime violent ou connaît quelqu’un qui l’a été",
          ar:"&nbsp;الجميع وقعوا ضحايا للعنف أو يعرفون شخصاً كذلك&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q3.11",
      title: {
        default:"In your community, is it common for men to hit their wives?",
        es:"En su comunidad, ¿es común que los hombres golpeen a sus esposas?",
        fr:"Dans votre communauté, est-il courant que les hommes frappent leur femme?",
        ar:"&nbsp;هل من الشائع أن يضرب الرجال زوجاتهم في مجتمعك؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"03",
        text: {
          default:"&nbsp;Of course, it is their right to do so",
          es:"&nbsp;Claro, es su derecho hacerlo",
          fr:"&nbsp;Bien sûr, c'est leur droit de le faire",
          ar:"&nbsp;طبعاً، فهذا حقّهم&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;Yes, even though it is against the law",
          es:"&nbsp;Sí, incluso a pesar de que va en contra de la ley",
          fr:"&nbsp;Oui, même si c'est contre la loi",
          ar:"&nbsp;نعم، مع أنّ هذا الأمر مخالفٌ للقانون&nbsp;"
        }
      }, {
        value:"0001",
        text: {
          default:"&nbsp;Sometimes, in certain circumstances",
          es:"&nbsp;A veces, en ciertas circunstancias",
          fr:"&nbsp;Parfois, dans certaines circonstances",
          ar:"&nbsp;في بعض الأحيان، في ظروف معيّنة&nbsp;"
        }
      }, {
        value:"00001",
        text: {
          default:"&nbsp;It is common, but socially unacceptable",
          es:"&nbsp;Es común, pero socialmente inaceptable",
          fr:"&nbsp;C'est commun, mais socialement inacceptable",
          ar:"&nbsp;هذا أمرٌ شائع ولكنه غير مقبول اجتماعياً&nbsp;"
        }
      }, {
        value:"000001",
        text: {
          default:"&nbsp;No, this behavior is socially unacceptable",
          es:"&nbsp;No, esta conducta es socialmente inaceptable",
          fr:"&nbsp;Non, ce comportement est socialement inacceptable",
          ar:"&nbsp;كلا، هذا السلوك غير مقبول اجتماعياً&nbsp;"
        }
      }]
    }, {
      type:"radiogroup",
      name:"Q3.12",
      title: {
        default:"Is it common for women to be beaten or disciplined by people other than their husbands (for example fathers, brothers, or in-laws)?",
        es:"¿Es común que las mujeres sean golpeadas o disciplinadas por personas que no sean sus esposos (por ejemplo, padres, hermanos, o familia política)?",
        fr:"Est-il courant que les femmes soient battues ou disciplinées par des personnes autres que leurs maris (pères, frères ou beaux-parents, par exemple)?",
        ar:"&nbsp;هل من الشائع أن تتعرّض النساء للضرب أو التأديب على يد أشخاص غير أزواجهنّ (مثلاً الآباء، أو الأشقاء، أو الأصهار)؟&nbsp;"
      },
      isRequired: true,
      colCount: 1,
      choices: [{
        value:"03",
        text: {
          default:"&nbsp;Of course, it is their right to do so",
          es:"&nbsp;Claro, es su derecho hacerlo",
          fr:"&nbsp;Bien sûr, c'est leur droit de le faire",
          ar:"&nbsp;طبعاً، فهذا حقّهم&nbsp;"
        }
      }, {
        value:"002",
        text: {
          default:"&nbsp;Yes, even though it is against the law",
          es:"&nbsp;Sí, incluso a pesar de que va en contra de la ley",
          fr:"&nbsp;Oui, même si c'est contre la loi",
          ar:"&nbsp;نعم، مع أنّ هذا الأمر مخالفٌ للقانون&nbsp;"
        }
      }, {
        value:"0001",
        text: {
          default:"&nbsp;Sometimes, in certain circumstances",
          es:"&nbsp;A veces, en ciertas circunstancias",
          fr:"&nbsp;Parfois, dans certaines circonstances",
          ar:"&nbsp;في بعض الأحيان، في ظروف معيّنة&nbsp;"
        }
      }, {
        value:"00001",
        text: {
          default:"&nbsp;It is common, but socially unacceptable",
          es:"&nbsp;Es común, pero socialmente inaceptable",
          fr:"&nbsp;C'est commun, mais socialement inacceptable",
          ar:"&nbsp;هذا أمرٌ شائع ولكنه غير مقبول اجتماعياً&nbsp;"
        }
      }, {
        value:"000001",
        text: {
          default:"&nbsp;No, this behavior is socially unacceptable",
          es:"&nbsp;No, esta conducta es socialmente inaceptable",
          fr:"&nbsp;Non, ce comportement est socialement inacceptable",
          ar:"&nbsp;كلا، هذا السلوك غير مقبول اجتماعياً&nbsp;"
        }
      }]
    }]
  }]
};
window.survey = new Survey.Model(json); /* Create Showdown Markdown Converter */
var converter = new showdown.Converter();
survey.onTextMarkdown.add(function (survey, options) { /* Convert Markdown --> HTML */
  var str = converter.makeHtml(options.text); /* Remove Root Paragraphs <p> */
  str = str.substring(3);
  str = str.substring(0, str.length - 4); /* Set HTML */
  options.html = str;
});
survey.onComplete.add(function (result) {
  var score = 0;
  jQuery.each(result.data, function (i, val) {
    if (Array.isArray(val)) {
      jQuery.each(val, function () {
        score += parseInt(this);
      });
    } else {
      score += parseInt(val);
    }
  });
  var countryScore = $('#coPicker').val();
  var displayScore = Math.round(score * countryScore);
  var calculatedScores = JSON.parse('{"0.9206": {"M": [13, 26],"E": [27, 86],"S": [87, 173]},"0.8233": {"M": [13, 34],"E": [35, 94],"S": [95, 173]},"0.7389": {"M": [13, 42],"E": [43, 102],"S": [103, 173]},"0.7314": {"M": [13, 43],"E": [44, 103],"S": [104, 173]},"0.7222": {"M": [13, 44],"E": [45, 104],"S": [105, 173]},"0.6889": {"M": [13, 46],"E": [47, 106],"S": [107, 173]},"0.6520": {"M": [13, 50],"E": [51, 110],"S": [111, 173]},"0.6367": {"M": [13, 51],"E": [52, 111],"S": [112, 173]},"0.6297": {"M": [13, 52],"E": [53, 112],"S": [113, 173]},"0.6269": {"M": [13, 52],"E": [53, 112],"S": [113, 173]},"0.6263": {"M": [13, 52],"E": [53, 112],"S": [113, 173]},"0.6046": {"M": [13, 54],"E": [55, 114],"S": [115, 173]},"0.6035": {"M": [13, 54],"E": [55, 114],"S": [115, 173]},"0.6029": {"M": [13, 54],"E": [55, 114],"S": [115, 173]},"0.5965": {"M": [13, 55],"E": [56, 115],"S": [116, 173]},"0.5964": {"M": [13, 55],"E": [56, 115],"S": [116, 173]},"0.5958": {"M": [13, 55],"E": [56, 115],"S": [116, 173]},"0.5927": {"M": [13, 55],"E": [56, 115],"S": [116, 173]},"0.5803": {"M": [13, 56],"E": [57, 116],"S": [117, 173]},"0.5775": {"M": [13, 57],"E": [58, 117],"S": [118, 173]},"0.5661": {"M": [13, 58],"E": [59, 118],"S": [119, 173]},"0.5623": {"M": [13, 58],"E": [59, 118],"S": [119, 173]},"0.5588": {"M": [13, 58],"E": [59, 118],"S": [119, 173]},"0.5579": {"M": [13, 58],"E": [59, 118],"S": [119, 173]},"0.5557": {"M": [13, 58],"E": [59, 118],"S": [119, 173]},"0.5529": {"M": [13, 59],"E": [60, 119],"S": [120, 173]},"0.5501": {"M": [13, 59],"E": [60, 119],"S": [120, 173]},"0.5468": {"M": [13, 59],"E": [60, 119],"S": [120, 173]},"0.5450": {"M": [13, 59],"E": [60, 119],"S": [120, 173]},"0.5372": {"M": [13, 60],"E": [61, 120],"S": [121, 173]},"0.5307": {"M": [13, 61],"E": [62, 121],"S": [122, 173]},"0.5276": {"M": [13, 61],"E": [62, 121],"S": [122, 173]},"0.5272": {"M": [13, 61],"E": [62, 121],"S": [122, 173]},"0.5250": {"M": [13, 61],"E": [62, 121],"S": [122, 173]},"0.5248": {"M": [13, 82],"E": [83, 142],"S": [143, 173]},"0.5242": {"M": [13, 61],"E": [62, 121],"S": [122, 173]},"0.5226": {"M": [13, 61],"E": [62, 121],"S": [122, 173]},"0.5224": {"M": [13, 61],"E": [62, 121],"S": [122, 173]},"0.5222": {"M": [13, 62],"E": [63, 122],"S": [123, 173]},"0.5215": {"M": [13, 62],"E": [63, 122],"S": [123, 173]},"0.5200": {"M": [13, 62],"E": [63, 122],"S": [123, 173]},"0.5186": {"M": [13, 62],"E": [63, 122],"S": [123, 173]},"0.5166": {"M": [13, 62],"E": [63, 122],"S": [123, 173]},"0.5156": {"M": [13, 62],"E": [63, 122],"S": [123, 173]},"0.5139": {"M": [13, 62],"E": [63, 122],"S": [123, 173]},"0.5130": {"M": [13, 62],"E": [63, 122],"S": [123, 173]},"0.5117": {"M": [13, 62],"E": [63, 122],"S": [123, 173]},"0.5065": {"M": [13, 63],"E": [64, 123],"S": [124, 173]},"0.5058": {"M": [13, 63],"E": [64, 123],"S": [124, 173]},"0.5012": {"M": [13, 63],"E": [64, 123],"S": [124, 173]},"0.5003": {"M": [13, 63],"E": [64, 123],"S": [124, 173]},"0.4975": {"M": [13, 64],"E": [65, 124],"S": [125, 173]},"0.4964": {"M": [13, 64],"E": [65, 124],"S": [125, 173]},"0.4948": {"M": [13, 64],"E": [65, 124],"S": [125, 173]},"0.4938": {"M": [13, 64],"E": [65, 124],"S": [125, 173]},"0.4915": {"M": [13, 64],"E": [65, 124],"S": [125, 173]},"0.4906": {"M": [13, 64],"E": [65, 124],"S": [125, 173]},"0.4901": {"M": [13, 64],"E": [65, 124],"S": [125, 173]},"0.4897": {"M": [13, 64],"E": [65, 124],"S": [125, 173]},"0.4859": {"M": [13, 65],"E": [66, 125],"S": [126, 173]},"0.4857": {"M": [13, 65],"E": [66, 125],"S": [126, 173]},"0.4815": {"M": [13, 65],"E": [66, 125],"S": [126, 173]},"0.4810": {"M": [13, 65],"E": [66, 125],"S": [126, 173]},"0.4766": {"M": [13, 66],"E": [67, 126],"S": [127, 173]},"0.4763": {"M": [13, 66],"E": [67, 126],"S": [127, 173]},"0.4752": {"M": [13, 66],"E": [67, 126],"S": [127, 173]},"0.4750": {"M": [13, 66],"E": [67, 126],"S": [127, 173]},"0.4713": {"M": [13, 66],"E": [67, 126],"S": [127, 173]},"0.4712": {"M": [13, 66],"E": [67, 126],"S": [127, 173]},"0.4707": {"M": [13, 66],"E": [67, 126],"S": [127, 173]},"0.4689": {"M": [13, 66],"E": [67, 126],"S": [127, 173]},"0.4670": {"M": [13, 66],"E": [67, 126],"S": [127, 173]},"0.4613": {"M": [13, 67],"E": [68, 127],"S": [128, 173]},"0.4595": {"M": [13, 67],"E": [68, 127],"S": [128, 173]},"0.4571": {"M": [13, 67],"E": [68, 127],"S": [128, 173]},"0.4558": {"M": [13, 67],"E": [68, 127],"S": [128, 173]},"0.4546": {"M": [13, 68],"E": [69, 128],"S": [129, 173]},"0.4526": {"M": [13, 68],"E": [69, 128],"S": [129, 173]},"0.4493": {"M": [13, 68],"E": [69, 128],"S": [129, 173]},"0.4465": {"M": [13, 68],"E": [69, 128],"S": [129, 173]},"0.4452": {"M": [13, 68],"E": [69, 128],"S": [129, 173]},"0.4440": {"M": [13, 69],"E": [70, 129],"S": [130, 173]},"0.4431": {"M": [13, 69],"E": [70, 129],"S": [130, 173]},"0.4418": {"M": [13, 69],"E": [70, 129],"S": [130, 173]},"0.4414": {"M": [13, 69],"E": [70, 129],"S": [130, 173]},"0.4381": {"M": [13, 69],"E": [70, 129],"S": [130, 173]},"0.4336": {"M": [13, 69],"E": [70, 129],"S": [130, 173]},"0.4334": {"M": [13, 69],"E": [70, 129],"S": [130, 173]},"0.4314": {"M": [13, 70],"E": [71, 130],"S": [131, 173]},"0.4308": {"M": [13, 70],"E": [71, 130],"S": [131, 173]},"0.4289": {"M": [13, 70],"E": [71, 130],"S": [131, 173]},"0.4258": {"M": [13, 70],"E": [71, 130],"S": [131, 173]},"0.4174": {"M": [13, 71],"E": [72, 131],"S": [132, 173]},"0.4155": {"M": [13, 71],"E": [72, 131],"S": [132, 173]},"0.4138": {"M": [13, 71],"E": [72, 131],"S": [132, 173]},"0.4108": {"M": [13, 72],"E": [73, 132],"S": [133, 173]},"0.4082": {"M": [13, 72],"E": [73, 132],"S": [133, 173]},"0.4078": {"M": [13, 72],"E": [73, 132],"S": [133, 173]},"0.4070": {"M": [13, 72],"E": [73, 132],"S": [133, 173]},"0.4069": {"M": [13, 72],"E": [73, 132],"S": [133, 173]},"0.4064": {"M": [13, 72],"E": [73, 132],"S": [133, 173]},"0.4063": {"M": [13, 72],"E": [73, 132],"S": [133, 173]},"0.4029": {"M": [13, 72],"E": [73, 132],"S": [133, 173]},"0.4022": {"M": [13, 72],"E": [73, 132],"S": [133, 173]},"0.4014": {"M": [13, 72],"E": [73, 132],"S": [133, 173]},"0.3984": {"M": [13, 73],"E": [74, 133],"S": [134, 173]},"0.3966": {"M": [13, 73],"E": [74, 133],"S": [134, 173]},"0.3959": {"M": [13, 73],"E": [74, 133],"S": [134, 173]},"0.3953": {"M": [13, 73],"E": [74, 133],"S": [134, 173]},"0.3952": {"M": [13, 73],"E": [74, 133],"S": [134, 173]},"0.3946": {"M": [13, 73],"E": [74, 133],"S": [134, 173]},"0.3935": {"M": [13, 73],"E": [74, 133],"S": [134, 173]},"0.3916": {"M": [13, 73],"E": [74, 133],"S": [134, 173]},"0.3902": {"M": [13, 73],"E": [74, 133],"S": [134, 173]},"0.3897": {"M": [13, 73],"E": [74, 133],"S": [134, 173]},"0.3893": {"M": [13, 73],"E": [74, 133],"S": [134, 173]},"0.3892": {"M": [13, 73],"E": [74, 133],"S": [134, 173]},"0.3857": {"M": [13, 74],"E": [75, 134],"S": [135, 173]},"0.3854": {"M": [13, 74],"E": [75, 134],"S": [135, 173]},"0.3837": {"M": [13, 74],"E": [75, 134],"S": [135, 173]},"0.3820": {"M": [13, 74],"E": [75, 134],"S": [135, 173]},"0.3732": {"M": [13, 75],"E": [76, 135],"S": [136, 173]},"0.3702": {"M": [13, 75],"E": [76, 135],"S": [136, 173]},"0.3682": {"M": [13, 75],"E": [76, 135],"S": [136, 173]},"0.3634": {"M": [13, 76],"E": [77, 136],"S": [137, 173]},"0.3623": {"M": [13, 76],"E": [77, 136],"S": [137, 173]},"0.3619": {"M": [13, 76],"E": [77, 136],"S": [137, 173]},"0.3572": {"M": [13, 76],"E": [77, 136],"S": [137, 173]},"0.3570": {"M": [13, 76],"E": [77, 136],"S": [137, 173]},"0.3507": {"M": [13, 77],"E": [78, 137],"S": [138, 173]},"0.3486": {"M": [13, 77],"E": [78, 137],"S": [138, 173]},"0.3399": {"M": [13, 78],"E": [79, 138],"S": [139, 173]},"0.3398": {"M": [13, 78],"E": [79, 138],"S": [139, 173]},"0.3387": {"M": [13, 78],"E": [79, 138],"S": [139, 173]},"0.3372": {"M": [13, 78],"E": [79, 138],"S": [139, 173]},"0.3365": {"M": [13, 78],"E": [79, 138],"S": [139, 173]},"0.3345": {"M": [13, 78],"E": [79, 138],"S": [139, 173]},"0.3325": {"M": [13, 79],"E": [80, 139],"S": [140, 173]},"0.3320": {"M": [13, 79],"E": [80, 139],"S": [140, 173]},"0.3300": {"M": [13, 79],"E": [80, 139],"S": [140, 173]},"0.3204": {"M": [13, 80],"E": [81, 140],"S": [141, 173]},"0.3129": {"M": [13, 80],"E": [81, 140],"S": [141, 173]},"0.3102": {"M": [13, 81],"E": [82, 141],"S": [142, 173]},"0.3096": {"M": [13, 81],"E": [82, 141],"S": [142, 173]},"0.3040": {"M": [13, 81],"E": [82, 141],"S": [142, 173]},"0.3005": {"M": [13, 81],"E": [82, 141],"S": [142, 173]},"0.2988": {"M": [13, 82],"E": [83, 142],"S": [143, 173]},"0.2969": {"M": [13, 82],"E": [83, 142],"S": [143, 173]},"0.2869": {"M": [13, 83],"E": [84, 143],"S": [144, 173]},"0.2800": {"M": [13, 83],"E": [84, 143],"S": [144, 173]},"0.2775": {"M": [13, 84],"E": [85, 144],"S": [145, 173]},"0.2715": {"M": [13, 84],"E": [85, 144],"S": [145, 173]},"0.2701": {"M": [13, 84],"E": [85, 144],"S": [145, 173]},"0.2630": {"M": [13, 85],"E": [86, 145],"S": [146, 173]},"0.2586": {"M": [13, 85],"E": [86, 145],"S": [146, 173]},"0.2422": {"M": [13, 87],"E": [88, 147],"S": [148, 173]},"0.2331": {"M": [13, 88],"E": [89, 148],"S": [149, 173]},"0.2263": {"M": [13, 88],"E": [89, 148],"S": [149, 173]},"0.2203": {"M": [13, 89],"E": [90, 149],"S": [150, 173]},"0.2136": {"M": [13, 89],"E": [90, 149],"S": [150, 173]},"0.2114": {"M": [13, 89],"E": [90, 149],"S": [150, 173]},"0.2091": {"M": [13, 90],"E": [91, 150],"S": [151, 173]},"0.2050": {"M": [13, 90],"E": [91, 150],"S": [151, 173]},"0.1924": {"M": [13, 91],"E": [92, 151],"S": [152, 173]},"0.1811": {"M": [13, 92],"E": [93, 152],"S": [153, 173]},"0.1776": {"M": [13, 93],"E": [94, 153],"S": [154, 173]},"0.1768": {"M": [13, 94],"E": [95, 154],"S": [155, 173]},"0.1464": {"M": [13, 95],"E": [96, 155],"S": [156, 173]},"0.1417": {"M": [13, 96],"E": [97, 156],"S": [157, 173]},"0.1284": {"M": [13, 97],"E": [98, 157],"S": [158, 173]},"0.1102": {"M": [13, 99],"E": [100, 159],"S": [160, 173]},"0.1000": {"M": [13, 99],"E": [101, 159],"S": [160, 173]}}');
  document.querySelector('#lngSel').innerHTML = "";
  document.querySelector('#surveyElement').innerHTML = "";
  var safetyPlan = "";
  var spLabel = "";
  var pLabel = "";
  var sLabel = ""; /* General Safety Plan */
  if (survey.locale === "en") {
    spLabel = "Safety Plan";
    pLabel = "Points";
    sLabel = "Score";
  } else if (survey.locale === "fr") {
    spLabel = "Plan de sécurité";
    pLabel = "Points";
    sLabel = "But";
  } else if (survey.locale === "es") {
    spLabel = "Plan de seguridad";
    pLabel = "Puntos";
    sLabel = "Puntuación";
  } else if (survey.locale === "ar") {
    spLabel = "خطة السلامة";
    pLabel = "نقاط";
    sLabel = "أحرز هدفاً";
  } /* Risk-Based Safety Plan */
  if (displayScore >= calculatedScores[countryScore + '']["S"][0] && displayScore <= calculatedScores[countryScore + '']["S"][1]) {
    if (survey.locale === "en") {
      safetyPlan += "<div class='bounding-bbox-simple' /><div style='font-family: \"Oswald\"; padding-top:50px; padding-bottom:50px; font-size: 40px; font-weight: bold; color: #1db35a;'>SEVERE RISK</div><div style='font-family: \"Open Sans\"; color: black;'><div style='padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>TRUSTED CONTACTS</div><p class='bottom-spacing'><b>1. </b> Identify 1-2 trusted, reliable people or organizations both inside and outside your country that you could contact for support in different situations.</p><p class='bottom-spacing'><b>2. </b> Memorize their contact details so you can reach them at any time. If you cannot memorize the details find a way to disguise them in your phone, address book, or something that is always with you.</p><p class='bottom-spacing'><b>3. </b> Establish regular (at least weekly) safe and secure check-in mechanisms with these contacts.</p><p class='bottom-spacing'><b>4. </b> At least one of your trusted contacts needs to know details of your safety plan. Do not give them a full copy on paper by email or by text. They will need to have some of the essential details in case of a crisis. It would be best if they memorized them or disguised any notes they have on their phone or laptop or notepad.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SAFE PLACES</div><p class='bottom-spacing'><b>1. </b> Identify 2 safe places you can escape to in an emergency. Where you choose for this purpose will depend on whether or not you need to consider children or family as well. You may decide that one of these places may need to be away from your town or community or outside the country.</p><p class='bottom-spacing'><b>2. </b> Work out the best way to reach these places by different methods - walk, drive, public transport, international travel - at different times of day/ night. Be ready to switch between the different methods if you have to.</p><p class='bottom-spacing'><b>3. </b> Make sure that you have a key or easy access to these places without needing to coordinate with someone.</p><p class='bottom-spacing'><b>4. </b> Plan that you may have to seek refuge for an extended period of time (at least a week). Always have a stock of food and water, any medicines you may need and an ID document with you. You should also have access to a sufficient amount of money or credit if you need to take refuge for an extended period or travel outside the country at short notice.</p><p class='bottom-spacing'><b>5. </b> Let your trusted contacts know if you are not able to go home and that you will stay in contact with them. It may not be safe for them or for you to tell them where you are.</p><p class='bottom-spacing'><b>6. </b> You should plan to be able to move to another safe location if the threat persists.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>PERSONAL INFORMATION</div><p class='bottom-spacing'><b>1. </b> Ask your family and friends not to share your personal information without your consent. This includes in or through social media postings and conversations. If someone is not abiding by this rule cut-off their access to your personal information.</p><p class='bottom-spacing'><b>2. </b> Rent a post box somewhere away from your residence to keep your home address confidential.</p><p class='bottom-spacing'><b>3. </b> Do not label your keys with specific identifiers.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>IMPORTANT DOCUMENTS</div><p class='bottom-spacing'><b>1. </b> Keep a set of your ID documents, medical, school or political records in more than one secure location that is not your home, workplace or a location for your political activities. You may decide that at least one of these is outside the country.</p><p class='bottom-spacing'><b>2. </b> Do the same for your immediate family, staff, and team members.</p><p class='bottom-spacing'><b>3. </b> Let one of your trusted contacts know where one set of documents is kept and make sure that they have unimpeded access to them. If you have a set outside the country, you may need to give someone the ability to access that set if you need them to.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>YOUR SURROUNDINGS</div><p class='bottom-spacing'><b>1. </b> You may need to consider undergoing security training yourself and having some level of trained security support available to you. Ensure that measures - e.g. perimeter lighting, alarms, cameras - are in place at your home, workplace and political office, to prevent unauthorized access.</p><p class='bottom-spacing'><b>2. </b> Always have a security check of a location for your political engagement/ event done in advance of the date. Once the surroundings have been assessed, make sure that any necessary changes are made to enhance your safety and that of the general public.</p><p class='bottom-spacing'><b>3. </b> You may need to seek enhanced security advice from professionals like the police or private sector security companies.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>TRAVELING</div><p class='bottom-spacing'><b>1. </b> Take someone you trust with you as you go about your political activities. Ensure that they are aware of your trusted contacts and safe places.</p><p class='bottom-spacing'><b>2. </b> You and any regular travel companions may need to undergo security training.</p><p class='bottom-spacing'><b>3. </b> Identify and use safe transportation routes. Vary the routes and the times that you travel. Consider having a dedicated driver.</p><p class='bottom-spacing'><b>4. </b> Let your trusted contacts know where you are going to be. Ensure that you check in with them at pre-agreed intervals for the duration of your political activity and until you return home or to base.</p><p class='bottom-spacing'><b>5. </b> Discuss with your trusted contacts how they should react if you have not arrived at your anticipated location or are out of reach for an agreed period of time.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DIGITAL FOOTPRINT</div><p class='bottom-spacing'><b>1. </b> Ensure your mobile phone has a lock code. Access your laptop with dualfactor ID. Change your passwords weekly. Do not share security codes or passwords.</p><p class='bottom-spacing'><b>2. </b> Avoid using public wireless internet connections or hotspots to prevent tracking of your information and reduce the potential of hacking.</p><p class='bottom-spacing'><b>3. </b> Do not leave your devices unattended, and if you are not using them switch them off.</p><p class='bottom-spacing'><b>4. </b> Review and update your privacy settings on your phone, computer or apps weekly. Turn off location services on apps and social media. Clear your browser history daily.</p><p class='bottom-spacing'><b>5. </b> If your devices are likely to be hacked, confiscated or searched, encrypt the files on your device and store an encrypted backup in a separate and secure place. Let your trusted contacts know where this is. Use encrypted conversation applications for your phone calls.</p><p class='bottom-spacing'><b>6. </b> Install a firewall and anti-virus/malware software on your computer, and update it weekly.</p><p class='bottom-spacing'><b>7. </b> Ask your family and friends not to share information about your location or personal images of you publicly on the internet or through social media. If someone is not abiding by this rule, cut-off their access to your personal information online and in person.</p><p class='bottom-spacing'><b>8. </b> Search for your name online periodically to ensure your personal information does not appear on public searches about you.</p><p class='bottom-spacing'><b>9. </b> Take screenshots of any malicious communications you receive through social media or the internet. Review these daily to see if there is a pattern to those who are sending them. Report any online harassment, abuse or threats that you receive to the police or relevant authorities. Provide a copy to your trusted contacts.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SUPPORT SERVICES</div><p class='bottom-spacing'><b>1. </b> Identify and note the details of any support services that might be available to you. For example women’s shelters, legal clinics, or influential local leaders. The best resources for you may need to be located beyond the area where you live or your usual geographic area of political activity, perhaps even outside the country.</p><p class='bottom-spacing'><b>2. </b> Ensure your travel companions or trusted contacts have the exact details of where these services are, and who your contacts are at those organizations.</p><p class='bottom-spacing'><b>3. </b> Check-in with these support services from time to time, so that you are not a stranger if you need to approach them in a crisis.</p><p class='bottom-spacing'><b>4. </b> In case you need to, work out the best way to reach these places by different methods - walk, drive, public transport, international travel - at different times of day/night. You should also have access to a sufficient amount of money or credit if you need to take refuge with one of these services for an extended period or travel outside the country at short notice.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENT</div><p class='bottom-spacing'><b>1. </b> Document any violence that you experience as a result of your political activity. For example, save voice messages, keep a journal of incidents, photograph any evidence of physical injuries. Store this securely and have a backup stored somewhere away from your home, workplace or political office.</p><p class='bottom-spacing'><b>2. </b> Tell your trusted contacts about the violence and where to find the documentation. Remember if the documentation is password protected or encrypted, you will need to provide this to your trusted contacts.</p><p class='bottom-spacing'><b>3. </b> Provide a copy of your documentation to a lawyer or human rights organization, with instructions about how it is to be used.</p><p class='bottom-spacing'><b>4. </b> Seek out others who may be experiencing similar situations, and develop a dynamic support and advocacy network.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>YOUR SAFETY PLAN</div><p class='bottom-spacing'><b>1. </b> Discuss your safety plan with one person you trust. This person may have to be outside of the country. Make sure they know what to do in an emergency. Remember they may need to take other actions on your behalf (like pick up your children) or to have quick access to keys and/or money and/or documents for you.</p><p class='bottom-spacing'><b>2. </b> Ensure that family and friends are not unintentionally undermining your safety plan - for example by posting personal information about you/ themselves publicly. If someone is not abiding by this rule, cut-off their access to your personal information online and in person.</p><p class='bottom-spacing'><b>3. </b> Teach and practice a signal for your team/staff or family to indicate if you or they are in trouble and to activate your emergency plan - for example to go to a safe place. Change the signal every week.</p><p class='bottom-spacing'><b>4. </b> Think of a phrase or personal fact (e.g. your favourite song) that your family or designated contact would recognise which you can use as a proof of life. Remind people of this phrase or fact without making it obvious.</p><p class='bottom-spacing'><b>5. </b> Review your safety plan at least every week, to make sure it is up to date. Remember to let your trusted contacts know about any important changes in your situation and in the safety plan.</p></div>";
    } else if (survey.locale === "fr") {
      safetyPlan += "<div class='bounding-bbox-simple' /><div style='font-family: \"Oswald\"; padding-top:50px; padding-bottom:50px; font-size: 40px; font-weight: bold; color: #1db35a;'>RISQUE GRAVE</div><div style='font-family: \"Open Sans\"; color: black;'><div style='padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>CONTACTS DE CONFIANCE</div><p class='bottom-spacing'><b>1. </b> Identifier 1 à 2 personnes ou organisations fiables et de confiance à l’intérieur et à l’extérieur de votre pays que vous pouvez contacter pour obtenir de l’aide dans différentes situations.</p><p class='bottom-spacing'><b>2. </b> Mémoriser leurs coordonnées afin que vous puissiez les joindre à tout moment. Si vous ne pouvez pas mémoriser les détails, trouvez un moyen de les dissimuler dans votre téléphone, votre carnet d’adresses ou quelque chose qui est toujours avec vous.</p><p class='bottom-spacing'><b>3. </b> Mettre en place des mécanismes d’enregistrement réguliers (au moins une fois par semaine) avec ces contacts.</p><p class='bottom-spacing'><b>4. </b> Au moins un de vos contacts de confiance doit connaître les détails de votre plan de sécurité. Ne pas leur donner une copie complète sur papier par email ou par SMS. Ils devront avoir certains des détails essentiels en cas de crise. Il serait préférable qu’ils les mémorisent ou déguisent les notes qu’ils ont sur leur téléphone, leur ordinateur portable, ou leur bloc-notes.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>LIEUX SÛRS</div><p class='bottom-spacing'><b>1. </b> Identifier 2 endroits sûrs où vous pouvez vous échapper en cas d’urgence. Où que vous choisissiez à cette fin dépendra de savoir si vous devez ou non considérer les enfants ou la famille. Vous pouvez décider que l’un de ces lieux peut devoir être éloigné de votre ville ou de votre communauté ou à l’extérieur du pays.</p><p class='bottom-spacing'><b>2. </b> Déterminer la meilleure façon d’atteindre ces lieux par différentes méthodes - marcher, conduire, transports en commun, voyages internationaux - à différents moments de la journée ou de la nuit. Être prêt à basculer entre les différentes méthodes si nécessaire.</p><p class='bottom-spacing'><b>3. </b> Vous assurer d’avoir une clé ou un accès facile à ces lieux sans avoir besoin de vous coordonner avec quelqu’un.</p><p class='bottom-spacing'><b>4. </b> Prévoir que vous deviez chercher refuge pendant une période prolongée (au moins une semaine). Avoir toujours un stock de nourriture et d’eau, tout médicament dont vous pourriez avoir besoin et une pièce d’identité avec vous. Vous devez également avoir accès à une somme d’argent ou à un crédit suffisant si vous devez vous réfugier pour une période prolongée ou voyager à l’étranger à court terme.</p><p class='bottom-spacing'><b>5. </b> Laisser vos contacts de confiance savoir si vous ne pouvez pas rentrer chez vous et rester en contact avec eux. Il peut ne pas être sûr pour eux ou pour vous de leur dire où vous êtes.</p><p class='bottom-spacing'><b>6. </b> Vous devez prévoir de pouvoir vous déplacer vers un autre lieu sûr si la menace persiste.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>INFORMATIONS PERSONNELLES</div><p class='bottom-spacing'><b>1. </b> Demander à votre famille et à vos amis de ne pas partager vos informations personnelles sans votre consentement. Cela inclut les messages et les conversations dans les médias sociaux. Si quelqu’un ne respecte pas cette règle, interrompre son accès à vos informations personnelles.</p><p class='bottom-spacing'><b>2. </b> Louer une boîte postale quelque part loin de votre domicile pour garder votre adresse confidentielle.</p><p class='bottom-spacing'><b>3. </b> Ne pas étiqueter vos clés avec des identificateurs spécifiques.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENTS IMPORTANTS</div><p class='bottom-spacing'><b>1. </b> Conserver un ensemble de documents d’identité, de dossiers médicaux, scolaires ou politiques dans plus d’un lieu sûr qui n’est pas votre domicile, votre lieu de travail ou un lieu pour vos activités politiques. Vous pouvez décider qu’au moins l’un d’entre eux est en dehors du pays.</p><p class='bottom-spacing'><b>2. </b> Faire la même chose pour votre famille immédiate, votre personnel et les membres de votre équipe.</p><p class='bottom-spacing'><b>3. </b> Faire savoir à l’un de vos contacts de confiance où se trouve un ensemble de documents et assurezvous qu’ils y ont librement accès. Si vous avez un ensemble en dehors du pays, vous devrez peut-être donner à quelqu’un la possibilité d’accéder à cet ensemble si vous en avez besoin.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>VOS ENVIRONS</div><p class='bottom-spacing'><b>1. </b> Vous devrez peut-être envisager de suivre une formation sur la sécurité vous-même et disposer d’un certain niveau d’assistance en matière de sécurité. S’assurer que les mesures - par exemple, éclairage de périmètre, alarmes, caméras - sont en place à votre domicile, sur votre lieu de travail et dans votre bureau politique, afin d’empêcher tout accès non autorisé.</p><p class='bottom-spacing'><b>2. </b> Avoir toujours un contrôle de sécurité d’un lieu pour votre engagement / événement politique effectué avant la date. Une fois l’environnement évalué, assurez-vous que les modifications nécessaires sont apportées pour améliorer votre sécurité et celle du grand public.</p><p class='bottom-spacing'><b>3. </b> Vous devrez peut-être obtenir des conseils de sécurité améliorés auprès de professionnels tels que la police ou les sociétés de sécurité du secteur privé.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>VOYAGER</div><p class='bottom-spacing'><b>1. </b> Prendre quelqu’un avec qui vous avez confiance dans vos activités politiques. Vous assurez qu’ils connaissent vos contacts de confiance et vos lieux sûrs.</p><p class='bottom-spacing'><b>2. </b> Vous et vos compagnons de voyage habituels devrez peut-être suivre une formation à la sécurité.</p><p class='bottom-spacing'><b>3. </b> Identifier et utiliser des voies de transport sûres. Variez les itinéraires et les heures que vous parcourez. Penser à avoir un chauffeur dédié.</p><p class='bottom-spacing'><b>4. </b> Laisser vos contacts de confiance savoir où vous allez être. Vous assurer de vous enregistrer avec eux à des intervalles prédéterminés pour la durée de votre activité politique et jusqu’à votre retour chez vous ou à votre base.</p><p class='bottom-spacing'><b>5. </b> Discuter avec vos contacts de confiance de la manière dont ils devraient réagir si vous n’êtes pas arrivé à votre lieu prévu ou si vous n’êtes pas en contact pendant une période accordée.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>EMPREINTE NUMÉRIQUE</div><p class='bottom-spacing'><b>1. </b> Vous assurer que votre téléphone portable a un code de verrouillage. Accéder à votre ordinateur portable avec un identifiant double facteur. Changer vos mots de passe chaque semaine. Ne pas partager les codes de sécurité ou les mots de passe.</p><p class='bottom-spacing'><b>2. </b> Éviter d’utiliser des connexions Internet sans fil publiques ou des points d’accès sans fil pour empêcher le suivi de vos informations et réduire le potentiel de piratage.</p><p class='bottom-spacing'><b>3. </b> Ne pas laisser vos appareils sans surveillance et, si vous ne les utilisez pas, désactivez-les.</p><p class='bottom-spacing'><b>4. </b> Éviter de garder des informations sensibles dans la mémoire de votre téléphone. Vérifier et mettre à jour vos paramètres de confidentialité sur votre téléphone, votre ordinateur ou vos applications chaque semaine. Désactiver les services de localisation sur les applications et les réseaux sociaux. Effacer l’historique de votre navigateur régulièrement cheque jour.</p><p class='bottom-spacing'><b>5. </b> Si vos appareils sont susceptibles d’être piratés, confisqués ou recherchés, crypter les fichiers sur votre appareil et stockez une sauvegarde cryptée dans un lieu distinct et sécurisé. Laisser vos contacts de confiance savoir où il est. Utiliser des applications de conversation cryptées pour vos appels téléphoniques.</p><p class='bottom-spacing'><b>6. </b> Installer un pare-feu et un anti-virus / logiciel malveillant sur votre ordinateur, et le methe à jour chaque semaine.</p><p class='bottom-spacing'><b>7. </b> Demander à votre famille et à vos amis de ne pas partager d’informations sur votre position ou vos images personnelles sur Internet ou sur les réseaux sociaux. Si quelqu’un ne respecte pas cette règle, interrompre son accès à vos informations personnelles en ligne et personellement.</p><p class='bottom-spacing'><b>8. </b> Rechercher votre nom en ligne régulièrement pour vous assurer que vos informations personnelles n’apparaissent pas dans les recherches publiques à votre sujet.</p><p class='bottom-spacing'><b>9. </b> Prendre des captures d’écran de toutes les communications malveillantes que vous recevez sur les médias sociaux ou sur Internet. Les examiner chaque jour pour voir s’il existe un modèle pour ceux qui les envoient. Signaler tout harcèlement, abus ou menace en ligne que vous recevez à la police ou aux autorités compétentes. Fournir une copie à vos contacts de confiance.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SERVICES DE SOUTIEN</div><p class='bottom-spacing'><b>1. </b> Identifier et noter les détails de tout service de support disponible pour vous. Par exemple les refuges pour femmes les cliniques juridiques ou les leaders locaux influents. Les meilleurs services pour vous devront peut-être être situés au-delà de votre région ou de votre zone géographique habituelle d’activité politique, peut-être même en dehors du pays.</p><p class='bottom-spacing'><b>2. </b> Vous assurer que vos compagnons de voyage ou vos contacts de confiance ont les détails exacts de l’emplacement de ces services et de vos contacts dans ces organisations.</p><p class='bottom-spacing'><b>3. </b> Vous enregistrer de temps en temps avec ces services de soutien, de sorte que vous ne soyez pas un étranger si vous avez besoin de les approcher en cas de crise.</p><p class='bottom-spacing'><b>4. </b> Au cas où vous en auriez besoin, trouver la meilleure façon d’atteindre ces lieux par différentes méthodes - marcher, conduire, transports en commun, des voyages international - à différents moments de la journée ou de la nuit. Vous devez également avoir accès à une somme d’argent ou à un crédit suffisant si vous devez vous réfugier avec une de ces ressources pendant une période prolongée ou voyager à l’étranger à court terme.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENTER</div><p class='bottom-spacing'><b>1. </b> Documenter toute violence que vous rencontrez en raison de votre activité politique. Par exemple, enregistrer des messages vocaux, tenir un journal des incidents, photographier toute preuve de blessures physiques. Stocker cela en toute sécurité et conservez une sauvegarde quelque part loin de chez vous, de votre lieu de travail ou de votre bureau politique.</p><p class='bottom-spacing'><b>2. </b> Dire à vos contacts de confiance de la violence et où trouver la documentation. Ne pas oublier que si la documentation est protégée par un mot de passe ou chiffrée, vous devrez la fournir à vos contacts de confiance.</p><p class='bottom-spacing'><b>3. </b> Fournir une copie de votre documentation à un avocat ou à une organisation de défense des droits de la personne, avec des instructions sur la manière de l’utiliser.</p><p class='bottom-spacing'><b>4. </b> Rechercher d’autres personnes susceptibles de connaître des situations similaires et développer un réseau de soutien et de plaidoyer dynamique.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>PLAN DE SÉCURITÉ</div><p class='bottom-spacing'><b>1. </b> Discuter votre plan de sécurité avec une personne en qui vous avez confiance. Vous assurer qu’il/ elle sait quoi faire en cas d’urgence. Vous rappeler qu’ils peuvent avoir besoin de prendre d’autres mesures en votre nom (comme aller chercher vos enfants) ou d’avoir un accès rapide aux clés et / ou à l’argent et / ou aux documents pour vous.</p><p class='bottom-spacing'><b>2. </b> Vous assurer que votre famille et vos amis ne compromettent pas involontairement votre plan de sécurité, par exemple, en publiant publiquement des informations personnelles sur vous / vousmême. Si quelqu’un ne respecte pas cette règle, interrompre son accès à vos informations personnelles. Cette personne possiblement doit être en dehors du pays.</p><p class='bottom-spacing'><b>3. </b> Enseigner et pratiquer un signal pour votre équipe / votre personnel ou votre famille pour indiquer si vous ou eux êtes en difficulté et pour activer votre plan d’urgence - par exemple, aller dans un endroit sûr. Changer le signal chaque semaine.</p><p class='bottom-spacing'><b>4. </b> Penser à une phrase ou à un fait personnel (par exemple, votre chanson préférée) que votre famille ou vos interlocuteurs désignés reconnaîtront et que vous pourriez utiliser comme preuve de vie. Rappeler aux gens cette phrase ou ce fait sans le rendre évident.</p><p class='bottom-spacing'><b>5. </b> Revoir votre plan de sécurité au moins une fois par semaine pour vous assurer qu’il est à jour. Ne pas oublier d’informer vos contacts de confiance de tout changement important dans votre situation et dans le plan de sécurité.</p></div>";
    } else if (survey.locale === "es") {
      safetyPlan += "<div class='bounding-bbox-simple' /><div style='font-family: \"Oswald\"; padding-top:50px; padding-bottom:50px; font-size: 40px; font-weight: bold; color: #1db35a;'>RIESGO GRAVE</div><div style='font-family: \"Open Sans\"; color: black;'><div style='padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>CONTACTOS DE CONFIANZA</div><p class='bottom-spacing'><b>1. </b> Identifique a una o dos personas u organizaciones de confianza, tanto dentro como fuera de su país, a las que pueda contactar para recibir apoyo en distintas situaciones.</p><p class='bottom-spacing'><b>2. </b> Memorice su información de contacto de manera que pueda comunicarse con ellas en cualquier momento. Si no puede memorizar la información de contacto, busque la manera de ocultarla en su teléfono, libreta de direcciones o en algo que lleve siempre consigo.</p><p class='bottom-spacing'><b>3. </b> Establezca mecanismos confiables y seguros para reportarse con estos contactos de manera periódica (por lo menos cada semana).</p><p class='bottom-spacing'><b>4. </b> Por lo menos uno de sus contactos de confianza debe conocer los detalles de su plan de seguridad. No les entregue una copia completa en papel, por correo electrónico ni por mensaje de texto. Es necesario que tengan algunos de los datos esenciales en caso de crisis; lo mejor es que los memoricen u oculten las notas que tengan al respecto en su teléfono, computadora portátil o tableta.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>LUGARES SEGUROS</div><p class='bottom-spacing'><b>1. </b> Identifique uno o dos lugares seguros a los que pueda huir para refugiarse en caso de una emergencia. Los lugares que elija con este fin dependerán de si necesita o no considerar también a niños o familiares. Si lo considera conveniente, incluya por lo menos un lugar en su comunidad o fuera del país.</p><p class='bottom-spacing'><b>2. </b> Identifique la mejor forma de llegar a estos lugares de distintas maneras (caminando, manejando, en transporte público, viajando al extranjero) a diferentes horas del día y de la noche. Prepárese para utilizar distintos medios de transporte si es necesario.</p><p class='bottom-spacing'><b>3. </b> Asegúrese de tener la llave o una forma de entrar estos lugares fácilmente sin necesitar de coordinarse con nadie.</p><p class='bottom-spacing'><b>4. </b> Prepárese en caso de que tenga que buscar refugio durante un periodo largo (por lo menos una semana). Siempre lleve consigo algo de comida y agua, los medicamentos que pueda necesitar y algún documento de identificación. Asegúrese de tener acceso a una cantidad suficiente de dinero o crédito en caso de que sea necesario refugiarse durante un largo periodo o viajar al extranjero con poca anticipación.</p><p class='bottom-spacing'><b>5. </b> Avísenles a sus contactos de confianza si no puede ir a casa y que estará en contacto con ellos.</p><p class='bottom-spacing'><b>6. </b> Asegúrese de estar preparada para moverse a otro lugar seguro si la amenaza persiste.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>INFORMACIÓN PERSONAL</div><p class='bottom-spacing'><b>1. </b> Pídales a sus familiares y amigos que no compartan con nadie su información personal sin su consentimiento, incluyendo conversaciones y publicaciones en redes sociales. Si alguien no respeta esta regla, impida el acceso de esta persona a su información personal.</p><p class='bottom-spacing'><b>2. </b> A fin de mantener confidencial la dirección de su casa, rente un apartado postal o reciba el correo en su oficina o en otro lugar lejos de su domicilio.</p><p class='bottom-spacing'><b>3. </b> No etiquete sus llaves con identificadores específicos.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENTOS IMPORTANTES</div><p class='bottom-spacing'><b>1. </b> Conserve un juego de sus documentos médicos o de identidad y sus registros escolares o políticos en más de un lugar seguro que no sea su casa, su lugar de trabajo ni ninguno de los lugares en los que realiza sus actividades políticas. Si lo considera conveniente, incluya por lo menos un lugar fuera del país.</p><p class='bottom-spacing'><b>2. </b> Haga lo mismo para sus familiares o miembros de su personal o equipo más cercanos.</p><p class='bottom-spacing'><b>3. </b> Informe a uno de sus contactos de confianza dónde guarda uno de estos juegos de documentos y asegúrese de que tenga acceso libre a él. Si guarda uno de los juegos fuera del país, asegúrese de que alguien pueda acceder al juego en caso de que se requiera.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SU ENTORNO</div><p class='bottom-spacing'><b>1. </b> Si es necesario, considere someterse a un entrenamiento de seguridad y contratar un servicio de seguridad privada. Asegúrese de que se implementen medidas (como iluminación perimetral, alarmas, cámaras) en su casa, lugar de trabajo y oficina política para evitar el acceso no autorizado.</p><p class='bottom-spacing'><b>2. </b> Siempre realice con anticipación una verificación de la seguridad del lugar donde se llevará a cabo el evento o actividad política. Una vez que se revise el lugar y sus alrededores, asegúrese de que se realicen todos los cambios que sean necesarios para incrementar la su seguridad y la del público en general.</p><p class='bottom-spacing'><b>3. </b> Considere obtener asesoría profesional de seguridad como la policía o empresas de seguridad del sector privado.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>VIAJES</div><p class='bottom-spacing'><b>1. </b> Asegúrese de estar acompañada por una persona de confianza cuando realice sus actividades políticas y que sepa quiénes son sus contactos de confianza y cuáles son sus lugares seguros.</p><p class='bottom-spacing'><b>2. </b> Considere tomar un entrenamiento de seguridad con su(s) acompañante(s) de viaje habitual(es).</p><p class='bottom-spacing'><b>3. </b> Identifique y utilice rutas de transporte seguras. Varíe las rutas y los horarios en los que viaje. Considere contratar a un chofer.</p><p class='bottom-spacing'><b>4. </b> Avíseles a sus contactos de confianza dónde estará.</p><p class='bottom-spacing'><b>5. </b> Asegúrese de comunicarse con ellos en intervalos previamente acordados durante su actividad política y hasta que regrese a su casa u oficina.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>INFORMACIÓN DIGITAL</div><p class='bottom-spacing'><b>1. </b> Asegúrese de que su teléfono celular tenga un código de bloqueo. Habilite la función de verificación de dos pasos para acceder a su computadora. Cambie sus contraseñas cada semana. No comparta sus códigos de seguridad ni contraseñas.</p><p class='bottom-spacing'><b>2. </b> Evite utilizar conexiones públicas de Internet inalámbricas o hotspots para evitar que rastreen su información y reducir la posibilidad de hackeo.</p><p class='bottom-spacing'><b>3. </b> No pierda de vista sus dispositivos y apáguelos cuando no los esté utilizando.</p><p class='bottom-spacing'><b>4. </b> Revise y actualice la configuración de seguridad de su teléfono, computadora o aplicaciones. Apague los servicios de localización de las aplicaciones y redes sociales semanalmente. Borre diariamente el historial de su navegador.</p><p class='bottom-spacing'><b>5. </b> Si existe el riesgo de que sus dispositivos sean hackeados, confiscados o revisados, encripte los archivos y guarde un respaldo encriptado en un lugar seguro e independiente. Infórmele a uno de sus contactos de confianza dónde está. Utilice aplicaciones de conversación cifrada para sus llamadas telefónicas.</p><p class='bottom-spacing'><b>6. </b> Instale un cortafuegos (firewall) y programa antivirus o antimalware en su computadora y lo actualice semanalmente.</p><p class='bottom-spacing'><b>7. </b> Pídales a sus familiares y amigos que no compartan públicamente en Internet ni redes sociales información sobre la ubicación donde usted se encuentra ni sus imágenes personales. Si alguien no respeta esta regla, impida el acceso de esta persona a su información personal en línea y in persona.</p><p class='bottom-spacing'><b>8. </b> Busque su nombre en línea periódicamente para asegurarse de que su información personal no aparezca en los resultados públicos de búsquedas sobre usted.</p><p class='bottom-spacing'><b>9. </b> Tome capturas de pantalla de toda comunicación maliciosa que reciba a través de redes sociales o Internet. Revíselas diariamente para ver si existe algún patrón sobre las personas que las envían. Denuncie ante la policía o las autoridades correspondientes todo acoso, abuso o amenazas que reciba en línea. Providencie una copia a sus contactos de confianza.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SERVICIOS DE APOYO</div><p class='bottom-spacing'><b>1. </b> Identifique y tome nota de los datos de todos los servicios de apoyo a los que tenga acceso, como por ejemplo, refugios para mujeres, clínicas de asesoría jurídica o líderes locales influyentes. Es posible que los mejores recursos se ubiquen fuera del área donde usted vive o del área geográfica donde normalmente realiza sus actividades políticas, o incluso quizás fuera el país.</p><p class='bottom-spacing'><b>2. </b> Asegúrese de que sus acompañantes tengan los datos exactos de la ubicación de los servicios y contactos de confianza que usted tiene en las organizaciones.</p><p class='bottom-spacing'><b>3. </b> Comuníquese de vez en cuando con estos servicios de apoyo de manera que sepan quién es usted en caso de que los necesite en una crisis.</p><p class='bottom-spacing'><b>4. </b> En caso de que sea necesario, identifique cuál es la mejor manera de llegar a estos lugares (caminando, manejando, en transporte público, viaje al atrajo) a diferentes horas del día y de la noche. Asegúrese de tener acceso a una cantidad suficiente de dinero o crédito en caso de que sea necesario refugiarse en uno de estos lugares durante un periodo largo o viajar al extranjero con poca anticipación.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENTE</div><p class='bottom-spacing'><b>1. </b> Documente toda violencia de la que sea víctima debido a su actividad política. Por ejemplo: guarde los mensajes de voz, lleve un diario de los incidentes, o fotografíe toda evidencia de lesiones físicas.</p><p class='bottom-spacing'><b>2. </b> Cuénteles a sus contactos de confianza sobre la violencia y dígales dónde encontrar los documentos. Recuerde que si los archivos están encriptados o protegidos con contraseña, es necesario que se la proporcione a sus contactos de confianza.</p><p class='bottom-spacing'><b>3. </b> Entréguele una copia de sus documentos a algún abogado u organización de derechos humanos con instrucciones sobre el uso.</p><p class='bottom-spacing'><b>4. </b> Busque a otras personas que estén pasando por situaciones similares y formen una red dinámica de apoyo y defensoría.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SU PLAN DE SEGURIDAD</div><p class='bottom-spacing'><b>1. </b> Comente su plan con alguien de su confianza y asegúrese de que sepa qué hacer en caso de emergencia. Esta persona puede necesitar estar ubicada fuera del país. Recuerde que puede ser necesario que hagan otras cosas en su nombre (como recoger a sus hijos) o que tengan acceso rápido a llaves, dinero o documentos.</p><p class='bottom-spacing'><b>2. </b> Asegúrese de que sus familiares y amigos no afecten accidentalmente su plan de seguridad (por ejemplo, al publicar información personal sobre usted o ellos mismos). Si alguien no respeta esta regla, impida el acceso de esta persona a su información personal en línea y en persona.</p><p class='bottom-spacing'><b>3. </b> Enséñeles a sus familiares o miembros de su personal o equipo una señal que indique que usted o ellos están en problemas y que debe activarse el plan de emergencia (por ejemplo, ir a un lugar seguro), y practíquenlo. Cambie esta señal cada semana.</p><p class='bottom-spacing'><b>4. </b> Piense en una frase o dato personal (como su canción favorita) que sus familiares o contacto de confianza reconocerían en caso de que se requiera como prueba de vida. Recuérdeles esta frase o dato sin hacerlo obvio.</p><p class='bottom-spacing'><b>5. </b> Revise su plan de seguridad al menos una vez por semana para asegurarse de que esté actualizado. Recuerde informarles a sus contactos de confianza sobre todo cambio importante en su situación y en el plan de seguridad.</p></div>";
    } else if (survey.locale === "ar") {
      safetyPlan += "<bdo dir='rtl'><div class='bounding-bbox-simple' /><div style='font-family: \"Oswald\"; padding-top:50px; padding-bottom:50px; font-size: 40px; font-weight: bold; color: #1db35a;'>معدل خطر مرتفع</div><div style='font-family: \"Open Sans\"; color: black;'><div style='padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>مجالات الحدث</div><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>معدل خطر مرتفع</div><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>جهات اتصال موثوقة</div><p class='bottom-spacing'><li>حددي 1-2 من الأشخاص أو المنظمات الموثوق بها داخل وخارج البلاد والمعتمد عليها والتي يمكنك الاتصال بها للحصول على الدعم في المواقف المختلفة.</li></p><p class='bottom-spacing'><li>أحفظي تفاصيل جهات الاتصال بحيث يمكنك الوصول إليها في أي وقت. إذا لم تتمكني من حفظ التفاصيل، فابحثي عن طريقة لإخفائها في هاتفك أو دفتر العناوين أو شيء ما دائمًا معك.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>أماكن آمنة</div><p class='bottom-spacing'><li>حددي 1-2 من الأماكن الآمنة التي يمكنك الهروب إليها في حالة الطوارئ. قد يعتمد اختيارك لهذا الغرض على اعتبار وجود عائلة واطفال.</li></p><p class='bottom-spacing'><li>أكتشفي أفضل طريقة للوصول إلى هذه الأماكن بالطرق المختلفة - كالمشي، القيادة أو وسائل النقل العام خلال أوقات مختلفة في الصباح والمساء.</li></p><p class='bottom-spacing'><li>تأكدي أن لديك مفتاح أو طريقة وصول سهلة إلى هذه الأماكن دون الحاجة إلى التنسيق مع شخص أخر.</li></p><p class='bottom-spacing'><li>احرصي دائمًا على حمل وجبة خفيفة وبعض الماء، بالإضافة إلى أي أدوية قد تحتاجينها، أو مستند إثبات الهوية، أو نقود أو بطاقة مصرفية معك، في حالة عدم قدرتك على العودة إلى المنزل.</li></p><p class='bottom-spacing'><li>اسمحي لجهات الاتصال الموثوق بها أن تعرف في حال كنت غير قادرة على العودة إلى المنزل وأنك ستبقين على اتصال بهم. قد لا يكون آمنا لهم أو لك اخبارهم بمكان وجودك.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>معلومات شخصية</div><p class='bottom-spacing'><li>احتفظي بمعلوماتك الشخصية بشكل خاص وسري على أن تكون متوفرة لأولئك المقربين إليك.</li></p><p class='bottom-spacing'><li>اطلبي من عائلتك وأصدقائك عدم مشاركة معلوماتك الشخصية دون موافقتك. وهذا يشمل في ومن خلال النشر في وسائل الاعلام الاجتماعية والمحادثات. في حال عدم التزام أي شخص  بهذه القاعدة ، قومي بإيقاف وصولهم إلى معلوماتك الشخصية.</li></p><p class='bottom-spacing'><li>قومي  باستئجار صندوق بريد وتلقي البريد والاتصالات في مكتبك أو في مكان ما بعيدًا عن مكان إقامتك للحفاظ على سرية عنوان منزلك.</li></p><p class='bottom-spacing'><li>لا تلصقي او تسمي سلسلة مفاتيحك برقعات أو مطبوعات قد تشير لفكرة أو شيء محدد.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>وثائق مهمة</div><p class='bottom-spacing'><li>احتفظي بمستندات الهويات التعريفية أو السجلات الطبية أو المدرسية أو السياسية في مكان آمن لا يمثل منزلك أو مكان عملك أو مكانًا لأنشطتك السياسية.</li></p><p class='bottom-spacing'><li>افعلي نفس الشيء بالنسبة لعائلتك وموظفيك وأعضاء الفريق.</li></p><p class='bottom-spacing'><li>دعي إحدى جهات الاتصال الموثوق بها تعرف أين يتم الاحتفاظ بمجموعة واحدة من المستندات والتأكد من إمكانية وصولهم إليها دون عوائق.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>البيئة المحيطة بك</div><p class='bottom-spacing'><li>تحققي دائمًا من موقع وعنوان ارتباطك او الحدث السياسي الذي ستحضرينه قبل موعده. قومي بتقدير محيطك عند تنفيذ الأنشطة السياسية وطالبي بالتغييرات إذا احسست بعدم راحة مع أي شيء في البيئة المحيطة حولك. تحققي من وجود مخارج سهلة واطلبي أن يبقى المسار واضحا إذا لم يكن هناك مسار.</li></p><p class='bottom-spacing'><li>قومي بتفقد حماية الممتلكات المادية في منزلك أو مكان عملك أو مكان عملك السياسي. تأكدي من أن التدابير - على سبيل المثال الإضاءة المحيطة، وأجهزة الإنذار، والكاميرات - موجودة في منزلك، ومكان العمل والمكتب السياسي، لمنع الوصول غير المصرح به.</li></p><p class='bottom-spacing'><li>لا تلصقي او تسمي سلسلة مفاتيحك برقعات أو مطبوعات قد تشير لفكرة أو شيء محدد. لا تزودي مفاتيح منزلك أو سيارتك أو مكان عملك لعدد كبير من الأشخاص أكثر من اللازم. خاصة إذا كان الموظفون المحليون أو موظفي مكتبك يتغيرون بانتظام، قومي بتغيير الأقفال.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>السفر</div><p class='bottom-spacing'><li>خذي معك شخصًا تثقين به أثناء ممارسة الانشطة السياسية. تأكدي بأن يكون هذا الشخص على علم بجهات اتصالك الموثوق بها ومكانك الآمن.</li></p><p class='bottom-spacing'><li>قومي بتحديد واستخدام طرق النقل الآمنة و بتغيير المسارات والأوقات التي تسافرين فيها.</li></p><p class='bottom-spacing'><li>اسمحي لجهات الاتصال الموثوق بها معرفة مكان وجودك ومتى ستعودين إلى المنزل.</li></p><p class='bottom-spacing'><li>ناقشي مع جهات الاتصال الموثوق بها كيف يجب أن يتصرفوا إذا لم تصلِ إلى موقعك المتوقع في الوقت المتفق عليه أو كنتِ خارج الاتصال لفترة محددة.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>البصمة الرقمية</div><p class='bottom-spacing'><li>تأكدي من أن هاتفك المحمول مقفل برمز. قومي بالوصول إلى الكمبيوتر المحمول الخاص بك باستخدام معرف عامل مزدوج. قومي بتغيير كلمات المرور الخاصة بكِ كل 3 أشهر. لا تشاركي رموز الأمان أو كلمات المرور ولا تخزني كلمات المرور أو المعلومات الحساسة في متصفح الإنترنت الخاص بكِ.</li></p><p class='bottom-spacing'><li>تجنبي استخدام اتصالات الإنترنت اللاسلكية العامة أو نقاط الانترنت المتنقلة لمنع تعقب معلوماتك وتقليل إمكانيات القرصنة.</li></p><p class='bottom-spacing'><li>لا تتركي أجهزتك دون رقابة، وإذا لم تستخدميها، فقومي بإيقاف تشغيلها.</li></p><p class='bottom-spacing'><li>تجنبي الاحتفاظ بالمعلومات الحساسة في ذاكرة هاتفك. قومي بمراجعة وتحديث إعدادات الخصوصية على الهاتف أو الكمبيوتر أو التطبيقات كل اسبوعين. قومي بإيقاف خدمة الموقع على التطبيقات والوسائط الاجتماعية و مسح ذاكرة المتصفح يومياً.</li></p><p class='bottom-spacing'><li>قومي بخزن نسخة احتياطية من المعلومات المهمة أو الملفات الرقمية الحساسة في مكان آمن.</li></p><p class='bottom-spacing'><li>قومي بإنشاء حساب بريد إلكتروني عام لعملك السياسي بحيث يبقى حسابك الشخصي خاصًا.</li></p><p class='bottom-spacing'><li>قومي بتنصيب برنامج جدار الحماية firewall و برنامج مكافحة الفيروسات anti-virus  على جهاز الكمبيوتر الخاص بك، واعملي على تحديثه.</li></p><p class='bottom-spacing'><li>اطلبي من عائلتك وأصدقائك عدم مشاركة معلومات عن موقعك أو صورك الشخصية علانية على الإنترنت أو عبر وسائل التواصل الاجتماعي.  في حال عدم التزام أي شخص  بهذه القاعدة ، قومي بإيقاف وصولهم إلى معلوماتك الشخصية.</li></p><p class='bottom-spacing'><li>ابحثي عن اسمك عبر الإنترنت بشكل دوري لضمان عدم ظهور معلوماتك الشخصية في عمليات البحث العامة عنك.</li></p><p class='bottom-spacing'><li>قومي بأخذ لقطات شاشة لأي اتصالات ضارة تصلك من خلال الشبكات الاجتماعية أو الإنترنت. راجعي هذه التقارير دوريًا لمعرفة ما إذا كان هناك نمط لأولئك الذين يرسلونها. بلغي عن أي إساءات ومضايقات وتهديدات قد تصلك عبر الانترنت للشرطة والسلطات المختصة. اعطي نسخة لجهة الاتصال الموثوق بها.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>خدمات الدعم</div><p class='bottom-spacing'><li>قومي بتحديد وملاحظة تفاصيل أي خدمات دعم محلية قد تكون متاحة لك. على سبيل المثال ملاجئ النساء والعيادات القانونية أو القادة المحليين المؤثرين.</li></p><p class='bottom-spacing'><li>تأكدي من أن رفقاء سفرك أو جهات الاتصال الموثوق بها تدرك أيضًا هذه المصادر وجهات الاتصال الخاصة بك في تلك المؤسسات.</li></p><p class='bottom-spacing'><li>تحققي مع خدمات الدعم هذه من وقت لآخر، حتى لا تكوني غريبة عليها ان كنت بحاجة إلى الوصول إليها أثناء الازمات.</li></p><p class='bottom-spacing'><li>في حالة ما إذا كنت بحاجة إلى ذلك، قومي بإيجاد أفضل طريقة للوصول إلى هذه الأماكن بطرق مختلفة - السير، القيادة ، وسائل النقل العام - في أوقات مختلفة خلال النهار والليل.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>التوثيق</div><p class='bottom-spacing'><li>توثيق أي عنف تتعرضين له كنتيجة لنشاطك السياسي. على سبيل المثال، أحتفظي بالرسائل الصوتية، تسجيلات الأحداث، تصوير أي دليل على إصابات جسدية وتخزينه بشكل آمن. قومي بتخزين هذا بشكل آمن واحتفظي بنسخة احتياطية مخزنة في مكان ما بعيدًا عن منزلك أو مكان عملك أو مكتبك السياسي.</li></p><p class='bottom-spacing'><li>أخبري جهات الاتصال الموثوق بها عن العنف الذي تتعرضين له وأين من الممكن إيجاد الوثائق المخزنة من قبلك. تذكري أنه إذا كانت الوثائق محمية بكلمة مرور أو مشفرة، ستحتاجين إلى إبلاغ جهة الاتصال الموثوق بها بهذه المعلومات.</li></p><p class='bottom-spacing'><li>قومي بالبحث عن الآخرين الذين قد يواجهون حالات مماثلة، و اعملي على تطوير شبكة دعم وإسناد حيوية و مؤيدة لك.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>خطة السلامة الخاصة بك</div><p class='bottom-spacing'><li>ناقشي خطة السلامة الخاصة بك مع شخص واحد تثقين به. تأكدي من أنه يعرف ما يجب القيام به في حالات الطوارئ.</li></p><p class='bottom-spacing'><li>تأكدي من أن العائلة والأصدقاء لن يعطلوا عن غير قصد خطة الأمان الخاصة بك - على سبيل المثال عن طريق نشر معلومات شخصية عنك أو عنهم علانية.  في حال عدم التزام أي شخص  بهذه القاعدة، قومي بإيقاف وصولهم إلى معلوماتك الشخصية.</li></p><p class='bottom-spacing'><li>قومي بتدريب وتلقين فريقك وموظفيك وعائلتك بأشارة أو رمز في حال كنت أنت او هم في مأزق وعلى أثرها قومي بتفعيل خطة الطوارئ الخاصة بك - على سبيل المثال، الذهاب إلى مكان آمن. غيري الإشارة او الرمز كل ثلاثة اشهر.</li></p><p class='bottom-spacing'><li>فكري في عبارة أو حقيقة شخصية عنك (مثل الأغنية المفضلة لديك) والتي قد تتعرف عليها عائلتك أو جهة الاتصال المعينة بك حيث يمكنك استخدامها كدليل على بقائك على قيد الحياة. ذكّري الأشخاص بهذه العبارة أو الحقيقة بدون جعلها واضحة للعلن.</li></p><p class='bottom-spacing'><li>راجعي خطة السلامة الخاصة بك على الأقل كل شهر للتأكد من تحديثها. تذكري السماح لجهات الاتصال الموثوق بها بمعرفة أي تغييرات مهمة.</li></p></div><bdo>";
    }
  } else if (displayScore >= calculatedScores[countryScore + '']["E"][0] && displayScore <= calculatedScores[countryScore + '']["E"][1]) {
    if (survey.locale === "en") {
      safetyPlan += "<div class='bounding-bbox-simple' /><div style='font-family: \"Oswald\"; padding-top:50px; padding-bottom:50px; font-size: 40px; font-weight: bold; color: #1db35a;'>ELEVATED RISK</div><div style='font-family: \"Open Sans\"; color: black;'><div style='padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>TRUSTED CONTACTS</div><p class='bottom-spacing'><b>1. </b> Identify 1-2 trusted, reliable people or organizations both inside and outside your country that you could contact for support in different situations.</p><p class='bottom-spacing'><b>2. </b> Memorize their contact details so you can reach them at any time. If you cannot memorize the details find a way to disguise them in your phone, address book, or something that is always with you.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SAFE PLACES</div><p class='bottom-spacing'><b>1. </b> Identify 1-2 safe places you can escape to in an emergency. Where you choose for this purpose will depend on whether or not you need to consider children or family as well.</p><p class='bottom-spacing'><b>2. </b> Work out the best way to reach these places by different methods - walk, drive, public transport - at different times of day/night.</p><p class='bottom-spacing'><b>3. </b> Make sure that you have a key or easy access to these places without needing to coordinate with someone.</p><p class='bottom-spacing'><b>4. </b> Always have a snack and some water, as well as any medicines you may need, an ID document, and money or a bank card with you, in case you cannot go home.</p><p class='bottom-spacing'><b>5. </b> Let your trusted contact(s) know if you are not able to go home and that you will stay in contact with them. It may not be safe for them or for you to tell them where you are.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>PERSONAL INFORMATION</div><p class='bottom-spacing'><b>1. </b> Keep your personal information private and only available to those close to you.</p><p class='bottom-spacing'><b>2. </b> Ask your family and friends not to share your personal information without your consent. This includes in or through social media postings and conversations. If someone is not abiding by this rule, either restrict or cut-off their access to your personal information.</p><p class='bottom-spacing'><b>3. </b> Rent a post box or receive mail and communications at your office or somewhere away from your residence to keep your home address confidential.</p><p class='bottom-spacing'><b>4. </b> Do not label your keys with specific identifiers.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>IMPORTANT DOCUMENTS</div><p class='bottom-spacing'><b>1. </b> Keep a set of your ID documents, medical, school or political records in more than one secure location that is not your home, workplace or a location for your political activities.</p><p class='bottom-spacing'><b>2. </b> Do the same for your immediate family, staff, and team members.</p><p class='bottom-spacing'><b>3. </b> Let one of your trusted contacts know where one set of documents is kept and make sure that they have unimpeded access to them.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>YOUR SURROUNDINGS</div><p class='bottom-spacing'><b>1. </b> Always check a location for your political engagement/event in advance of the date. Assess your surroundings when carrying out political activities and ask for changes to be made if you are uncomfortable with anything about the environment. Check for easy exits and ask that a path be kept clear if there isn’t one.</p><p class='bottom-spacing'><b>2. </b> Review the physical security of your home, workplace or political location. Ensure that measures - e.g. perimeter lighting, alarms, cameras - are in place at your home, workplace and political office, to prevent unauthorized access.</p><p class='bottom-spacing'><b>3. </b> Do not label your keys with specific identifiers. Do not provide keys to your home, car or workplace to more people than absolutely necessary. Particularly if your domestic or office staff change regularly, change your locks.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>TRAVELING</div><p class='bottom-spacing'><b>1. </b> Take someone you trust with you as you go about your political activities. Ensure that they are aware of your trusted contacts and safe places.</p><p class='bottom-spacing'><b>2. </b> Identify and use safe transportation routes. Vary the routes and the times that you travel.</p><p class='bottom-spacing'><b>3. </b> Let your trusted contacts know where you are going to be and when you will return home.</p><p class='bottom-spacing'><b>4. </b> Discuss with your trusted contacts how they should react if you have not arrived at your anticipated location or are out of reach for an agreed period of time.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DIGITAL FOOTPRINT</div><p class='bottom-spacing'><b>1. </b> Ensure your mobile phone has a lock code. Access your laptop with dual-factor ID. Change your passwords every 3 months. Do not share security codes or passwords. Do not store passwords or sensitive information in your internet browser.</p><p class='bottom-spacing'><b>2. </b> Avoid using public wireless internet connections or hotspots to prevent tracking of your information and reduce the potential of hacking.</p><p class='bottom-spacing'><b>3. </b> Do not leave your devices unattended, and if you are not using them switch them off.</p><p class='bottom-spacing'><b>4. </b> Avoid keeping sensitive information in your phone’s memory. Review and update your privacy settings on your phone, computer or apps every two weeks. Turn off location services on apps and social media. Clear your browser history daily.</p><p class='bottom-spacing'><b>5. </b> Back-up important information or sensitive digital files in a secure place.</p><p class='bottom-spacing'><b>6. </b> Create a public email account for your political work so that your personal account remains private.</p><p class='bottom-spacing'><b>7. </b> Install a firewall and anti-virus/malware software on your computer, and keep it updated.</p><p class='bottom-spacing'><b>8. </b> Ask your family and friends not to share information about your location or personal images of you publicly on the internet or through social media. If someone is not abiding by this rule, either restrict or cut-off their access to your personal information.</p><p class='bottom-spacing'><b>9. </b> Search for your name online periodically to ensure your personal information does not appear on public searches about you.</p><p class='bottom-spacing'><b>10. </b> Take screenshots of any malicious communications you receive through social media or the internet. Review these periodically to see if there is a pattern to those who are sending them. Report any online harassment, abuse or threats that you receive to the police or relevant authorities. Provide a copy to your trusted contacts.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SUPPORT SERVICES</div><p class='bottom-spacing'><b>1. </b> Identify and note the details of any local or nearby support services that might be available to you. For example women’s shelters, legal clinics, or influential local leaders.</p><p class='bottom-spacing'><b>2. </b> Ensure your travel companions or trusted contact(s) are also aware of these services, and your contacts at those organizations.</p><p class='bottom-spacing'><b>3. </b> Check-in with these support services from time to time, so that you are not a stranger if you need to approach them in a crisis.</p><p class='bottom-spacing'><b>4. </b> In case you need to, work out the best way to reach these places by different methods - walk, drive, public transport - at different times of day/night.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENT</div><p class='bottom-spacing'><b>1. </b> Document any violence that you experience as a result of your political activity. For example, save voice messages, keep a journal of incidents, photograph any evidence of physical injuries. Store this securely and have a backup stored somewhere away from your home, workplace or political office.</p><p class='bottom-spacing'><b>2. </b> Tell your trusted contacts about the violence and where to find the documentation. Remember if the documentation is password protected or encrypted, you will need to provide this to your trusted contacts.</p><p class='bottom-spacing'><b>3. </b> Seek out others who may be experiencing similar situations, and develop a dynamic support and advocacy network.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>YOUR SAFETY PLAN</div><p class='bottom-spacing'><b>1. </b> Discuss your safety plan with one person you trust. Make sure they know what to do in an emergency.</p><p class='bottom-spacing'><b>2. </b> Ensure that family and friends are not unintentionally undermining your safety plan - for example by posting personal information about you/themselves publicly. If someone is not abiding by this rule, either restrict or cut-off their access to your personal information online and in person.</p><p class='bottom-spacing'><b>3. </b> Teach and practice a signal for your team/staff or family to indicate if you or they are in trouble and to activate your emergency plan - for example to go to a safe place. Change the signal every three months.</p><p class='bottom-spacing'><b>4. </b> Think of a phrase or personal fact (e.g. your favorite song) that your family or designated contacts would recognize which you can use as a proof of life. Remind people of this phrase or fact without making it obvious.</p><p class='bottom-spacing'><b>5. </b> Review your safety plan at least every month, to make sure it is up to date. Remember to let your trusted contacts know about any important changes.</p></div>";
    } else if (survey.locale === "fr") {
      safetyPlan += "<div class='bounding-bbox-simple' /><div style='font-family: \"Oswald\"; padding-top:50px; padding-bottom:50px; font-size: 40px; font-weight: bold; color: #1db35a;'>RISQUE ÉLEVÉ</div><div style='font-family: \"Open Sans\"; color: black;'><div style='padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>CONTACTS DE CONFIANCE</div><p class='bottom-spacing'><b>1. </b> Identifier 1 ou 2 personnes ou organisations fiables et de confiance dans et en dehors de votre pays auxquelles vous pouvez vous adresser pour obtenir de l’aide dans différentes situations.</p><p class='bottom-spacing'><b>2. </b> Mémoriser leurs coordonnées afin que vous puissiez les joindre à tout moment. Si vous ne pouvez pas mémoriser les détails, trouvez un moyen de les dissimuler dans votre téléphone, votre carnet d’adresses ou quelque chose qui est toujours avec vous.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>LIEUX SÛRS</div><p class='bottom-spacing'><b>1. </b> Identifier 1-2 endroits sûrs où vous pouvez vous échapper en cas d’urgence. Où que vous choisissiez à cette fin dépendra de savoir si vous devez ou non considérer les enfants ou la famille.</p><p class='bottom-spacing'><b>2. </b> Déterminer la meilleure façon d’atteindre ces lieux par différentes méthodes - marcher, conduire, transports en commun - à différents moments de la journée ou de la nuit.</p><p class='bottom-spacing'><b>3. </b> Vous assurer d’avoir une clé ou un accès facile à ces lieux sans avoir besoin de vous coordonner avec quelqu’un.</p><p class='bottom-spacing'><b>4. </b> Avoir toujours une collation et de l’eau, ainsi que tout médicament dont vous pourriez avoir besoin, une pièce d’identité et de l’argent ou une carte bancaire si vous ne pouvez pas rentrer chez vous.</p><p class='bottom-spacing'><b>5. </b> Laisser vos contacts de confiance savoir si vous ne pouvez pas rentrer chez vous et rester en contact avec eux. Il peut ne pas être sûr pour eux ou pour vous de leur dire où vous êtes.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>INFORMATIONS PERSONNELLES</div><p class='bottom-spacing'><b>1. </b> Garder vos informations personnelles privées et disponibles seulement pour vos proches.</p><p class='bottom-spacing'><b>2. </b> Demander à votre famille et à vos amis de ne pas partager vos informations personnelles sans votre consentement. Cela inclut dans / par les médias sociaux et les conversations. Si quelqu’un ne respecte pas cette règle, interrompre son accès à vos informations personnelles.</p><p class='bottom-spacing'><b>3. </b> Si votre adresse personnelle ou votre numéro de téléphone personnel est régulièrement répertorié, prendre des mesures pour le rendre privé.</p><p class='bottom-spacing'><b>4. </b> Ne pas étiqueter vos clés avec des identificateurs spécifiques.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENTS IMPORTANTS</div><p class='bottom-spacing'><b>1. </b> Conserver une série de documents d’identité, de dossiers médicaux, scolaires ou politiques dans plus d’un endroit sûr qui n’est pas votre domicile, votre lieu de travail ou un lieu pour vos activités politiques.</p><p class='bottom-spacing'><b>2. </b> Faire la même chose pour votre famille immédiate, votre personnel et les membres de votre équipe.</p><p class='bottom-spacing'><b>3. </b> Faire savoir à l’un de vos contacts de confiance où se trouve un ensemble de documents et vous assurer qu’ils y ont librement accès.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>VOS ENVIRONS</div><p class='bottom-spacing'><b>1. </b> Toujours vérifier un emplacement pour votre engagement politique / événement avant la date. Évaluer votre environnement lorsque vous effectuez des activités politiques et demander des changements si vous n’êtes pas à l’aise avec l’environnement. Vérifier les sorties faciles et demander à ce qu’un chemin soit dégagé s’il n’y en a pas.</p><p class='bottom-spacing'><b>2. </b> Examiner la sécurité physique de votre domicile, de votre lieu de travail ou de votre lieu politique. Vous assurer que les mesures - par exemple, éclairage de périmètre, alarmes, caméras - sont en place à votre domicile, sur votre lieu de travail et dans votre bureau politique, afin d’empêcher tout accès non autorisé.</p><p class='bottom-spacing'><b>3. </b> Ne pas étiqueter vos clés avec des identificateurs spécifiques. Ne fourmir pas les clés de votre domicile, de votre voiture ou de votre lieu de travail à plus de personnes que ce qui est absolument nécessaire. En particulier si votre personnel domestique ou de bureau change régulièrement, changer vos serrures.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>VOYAGER</div><p class='bottom-spacing'><b>1. </b> Prendre quelqu’un avec qui vous avez confiance dans vos activités politiques. Vous assurer qu’ils connaissent vos contacts de confiance et vos lieux sûrs.</p><p class='bottom-spacing'><b>2. </b> Identifier et utiliser des voies de transport sûres. Varier les itinéraires et les heures que vous parcourez.</p><p class='bottom-spacing'><b>3. </b> Laisser vos contacts de confiance savoir où vous allez être et quand vous rentrerez chez vous.</p><p class='bottom-spacing'><b>4. </b> Discuter avec vos contacts de confiance de la manière dont ils devraient réagir si vous n’êtes pas arrivé à votre lieu prévu ou si vous n’êtes pas en contact pendant une période accordée.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>EMPREINTE NUMÉRIQUE</div><p class='bottom-spacing'><b>1. </b> Vous assurer que votre téléphone portable a un code de verrouillage. Accéder à votre ordinateur portable avec un identifiant double facteur. Changer vos mots de passe tous les 3 mois. Ne pas partager les codes de sécurité ou les mots de passe. Ne pas stocker de mots de passe ou d’informations sensibles dans votre navigateur Internet.</p><p class='bottom-spacing'><b>2. </b> Éviter d’utiliser des connexions Internet sans fil publiques ou des points d’accès sans fil pour empêcher le suivi de vos informations et réduire le potentiel de piratage.</p><p class='bottom-spacing'><b>3. </b> Ne pas laisser vos appareils sans surveillance et, si vous ne les utilisez pas, les désactiver.</p><p class='bottom-spacing'><b>4. </b> Éviter de garder des informations sensibles dans la mémoire de votre téléphone. Vérifier et mettre à jour vos paramètres de confidentialité sur votre téléphone, votre ordinateur ou vos applications tous les deux semaines. Désactiver les services de localisation sur les applications et les réseaux sociaux. Effacer l’historique de votre navigateur régulièrement chaque jour.</p><p class='bottom-spacing'><b>5. </b> Sauvegarder des informations importantes ou des fichiers numériques sensibles dans un lieu sécurisé.</p><p class='bottom-spacing'><b>6. </b> Créer un compte de messagerie public pour votre travail politique afin que votre compte personnel reste privé.</p><p class='bottom-spacing'><b>7. </b> Installer un pare-feu et un anti-virus / logiciel malveillant sur votre ordinateur, et le conserver à jour.</p><p class='bottom-spacing'><b>8. </b> Demander à votre famille et à vos amis de ne pas partager d’informations sur votre position ou vos images personnelles sur Internet ou sur les réseaux sociaux. Si quelqu’un ne respecte pas cette règle, restreindre ou interrompre son accès à vos informations personnelles.</p><p class='bottom-spacing'><b>9. </b> Rechercher votre nom en ligne régulièrement pour vous assurer que vos informations personnelles n’apparaissent pas dans les recherches publiques à votre sujet.</p><p class='bottom-spacing'><b>10. </b> Prendre des captures d’écran de toutes les communications malveillantes que vous recevez sur les médias sociaux ou sur Internet. Les examiner périodiquement pour voir s’il existe un modèle pour ceux qui les envoient. Signaler tout harcèlement, abus ou menace en ligne que vous recevez à la police ou aux autorités compétentes. Fournir une copie à vos contacts de confiance.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SERVICES DE SOUTIEN</div><p class='bottom-spacing'><b>1. </b> Identifier et noter les détails de tout service de support local ou proche qui pourrait être disponible. Par exemple les refuges pour femmes, les cliniques juridiques ou les leaders locaux influents.</p><p class='bottom-spacing'><b>2. </b> Vous assurer que vos compagnons de voyage ou vos contacts de confiance connaissent également ces services et vos contacts dans ces organisations.</p><p class='bottom-spacing'><b>3. </b> Vous enregistrer de temps en temps avec ces services de soutien, de sorte que vous ne soyez pas un étranger si vous avez besoin de les approcher en cas de crise.</p><p class='bottom-spacing'><b>4. </b> Au cas où vous en auriez besoin, trouver la meilleure façon d’atteindre ces lieux par différentes méthodes - marcher, conduire, transports en commun - à différents moments de la journée ou de la nuit.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENTER</div><p class='bottom-spacing'><b>1. </b> Documenter toute violence que vous rencontrez en raison de votre activité politique. Par exemple, enregistrer des messages vocaux, tenir un journal des incidents, photographier toute preuve de blessures physiques. Stocker cela en toute sécurité et conservez une sauvegarde quelque part loin de chez vous, de votre lieu de travail ou de votre bureau politique.</p><p class='bottom-spacing'><b>2. </b> Dire à vos contacts de confiance de la violence et où trouver la documentation. Ne pas oublier que si la documentation est protégée par un mot de passe ou chiffrée, vous devrez la fournir à vos contacts de confiance.</p><p class='bottom-spacing'><b>3. </b> Rechercher d’autres personnes susceptibles de connaître des situations similaires et développer un réseau de soutien et de plaidoyer dynamique.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>PLAN DE SÉCURITÉ</div><p class='bottom-spacing'><b>1. </b> Discuter de votre plan de sécurité avec une personne en qui vous avez confiance. Vous assurer qu’il/elle sait quoi faire en cas d’urgence.</p><p class='bottom-spacing'><b>2. </b> Vous assurer que votre famille et vos amis ne compromettent pas involontairement votre plan de sécurité, par exemple, en publiant publiquement des informations personnelles sur vous / vousmême. Si quelqu’un ne respecte pas cette règle, restreindre ou interrompre son accès à vos informations personnelles.</p><p class='bottom-spacing'><b>3. </b> Enseigner et pratiquer un signal pour votre équipe / votre personnel ou votre famille pour indiquer si vous ou eux êtes en difficulté et pour activer votre plan d’urgence - par exemple, aller dans un endroit sûr. Changer le signal tous les trois mois.</p><p class='bottom-spacing'><b>4. </b> Penser à une phrase ou à un fait personnel (par exemple, votre chanson préférée) que votre famille ou vos interlocuteurs désignés reconnaîtront et que vous pourriez utiliser comme preuve de vie. Rappeler aux gens cette phrase ou ce fait sans le rendre évident.</p><p class='bottom-spacing'><b>5. </b> Réviser votre plan de sécurité au moins tous les mois pour vous assurer qu’il est à jour. Ne pas oubliez d’informer vos contacts de confiance de tout changement important.</p></div>";
    } else if (survey.locale === "es") {
      safetyPlan += "<div class='bounding-bbox-simple' /><div style='font-family: \"Oswald\"; padding-top:50px; padding-bottom:50px; font-size: 40px; font-weight: bold; color: #1db35a;'>RIESGO ELEVADO</div><div style='font-family: \"Open Sans\"; color: black;'><div style='padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>CONTACTOS DE CONFIANZA</div><p class='bottom-spacing'><b>1. </b> Identifique a una o dos personas u organizaciones de confianza, tanto dentro como fuera de su país, a las que pueda contactar para recibir apoyo en distintas situaciones.</p><p class='bottom-spacing'><b>2. </b> Memorice su información de contacto de manera que pueda comunicarse con ellas en cualquier momento. Si no puede memorizar la información de contacto, busque la manera de ocultarla en su teléfono, libreta de direcciones o en algo que lleve siempre consigo.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>LUGARES SEGUROS</div><p class='bottom-spacing'><b>1. </b> Identifique uno o dos lugares seguros a los que pueda huir para refugiarse en caso de una emergencia. Los lugares que elija con este fin dependerán de si necesita o no considerar también a niños o familiares.</p><p class='bottom-spacing'><b>2. </b> Identifique la mejor forma de llegar a estos lugares de distintas maneras (caminando, manejando, en transporte público) a diferentes horas del día y de la noche.</p><p class='bottom-spacing'><b>3. </b> Asegúrese de tener la llave o una forma de entrar a estos lugares fácilmente sin necesidad de coordinarse con una otra persona.</p><p class='bottom-spacing'><b>4. </b> Siempre lleve consigo algo de comida y agua, los medicamentos que pueda necesitar, algún documento de identificación y dinero o tarjetas bancarias.</p><p class='bottom-spacing'><b>5. </b> Avísele(s) a su(s) contacto(s) de confianza si no puede ir a casa y que estará en contacto con él/ ella (ellos). Quizás no sea seguro para usted ni para ellos que les diga dónde está.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>INFORMACIÓN PERSONAL</div><p class='bottom-spacing'><b>1. </b> Mantenga su información personal privada y disponible únicamente para las personas más cercanas a usted.</p><p class='bottom-spacing'><b>2. </b> Pídales a sus familiares y amigos que no compartan con nadie su información personal sin su consentimiento, incluyendo conversaciones y publicaciones en redes sociales. Si alguien no respeta esta regla, limite o impida el acceso de esta persona a su información personal.</p><p class='bottom-spacing'><b>3. </b> A fin de mantener confidencial la dirección de su casa, arriende un apartado postal o reciba el correo en su oficina o en otro lugar lejos de su domicilio.</p><p class='bottom-spacing'><b>4. </b> No etiquete sus llaves con identificadores específicos.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENTOS IMPORTANTES</div><p class='bottom-spacing'><b>1. </b> Conserve un juego de sus documentos médicos o de identidad y sus registros escolares o políticos en más de un lugar seguro que no sea su casa, su lugar de trabajo ni ninguno de los lugares en los que realiza sus actividades políticas.</p><p class='bottom-spacing'><b>2. </b> Haga lo mismo para sus familiares o miembros de su personal o equipo más cercanos.</p><p class='bottom-spacing'><b>3. </b> Infórmele a uno de sus contactos de confianza dónde guarda uno de estos juegos de documentos y asegúrese de que tenga acceso libre a él.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SU ENTORNO</div><p class='bottom-spacing'><b>1. </b> Siempre verifique con anticipación el lugar donde se llevará a cabo el evento o actividad política. Revise todo lo que hay a su alrededor cuando lleve a cabo actividades políticas y solicite que se hagan cambios si no se siente cómoda con algo en el entorno. Busque una salida fácil y pida que se mantenga libre una ruta de salida en caso de que no la haya.</p><p class='bottom-spacing'><b>2. </b> Revise la seguridad física de su casa, lugar de trabajo o los lugares donde realice actividades políticas. Asegúrese de que se implementen medidas (como iluminación perimetral, alarmas, cámaras) en su casa, lugar de trabajo y oficina política para evitar el acceso no autorizado.</p><p class='bottom-spacing'><b>3. </b> No etiquete sus llaves con identificadores específicos. No les entregue las llaves de su casa, auto ni lugar de trabajo a más personas de las que sea absolutamente necesario. Si su personal doméstico o de oficina cambia periódicamente, cambie las cerraduras.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>VIAJES</div><p class='bottom-spacing'><b>1. </b> Asegúrese de estar acompañada por una persona de confianza cuando realice sus actividades políticas y que sepa quiénes son sus contactos de confianza y cuáles son sus lugares seguros.</p><p class='bottom-spacing'><b>2. </b> Identifique y utilice rutas de transporte seguras. Varíe las rutas y los horarios en los que viaje.</p><p class='bottom-spacing'><b>3. </b> Avíseles a sus contactos de confianza en dónde estará y a qué hora regresará a casa.</p><p class='bottom-spacing'><b>4. </b> Platique con sus contactos de confianza sobre cómo deben reaccionar si usted no llega a su destino anticipado o no la pueden contactar después de un determinado tiempo.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>INFORMACIÓN DIGITAL</div><p class='bottom-spacing'><b>1. </b> Asegúrese de que su teléfono celular tenga un código de bloqueo. Habilite la función de verificación de dos pasos para acceder a su computadora. Cambie sus contraseñas cada mes. No comparta sus códigos de seguridad ni contraseñas. No guarde contraseñas ni otra información delicada en su navegador de Internet.</p><p class='bottom-spacing'><b>2. </b> Evite utilizar conexiones públicas de Internet inalámbricas o hotspots para evitar que rastreen su información y reducir la posibilidad de hackeo.</p><p class='bottom-spacing'><b>3. </b> No pierda de vista sus dispositivos y apáguelos cuando no los esté utilizando.</p><p class='bottom-spacing'><b>4. </b> Evite guardar información delicada en la memoria de su teléfono. Revise y actualice la configuración de seguridad de su teléfono, computadora o aplicaciones a cada dos semanas. Bore diariamente el historial de su navegador.</p><p class='bottom-spacing'><b>5. </b> Respalde los archivos digitales importantes o confidenciales en algún lugar seguro.</p><p class='bottom-spacing'><b>6. </b> Cree una cuenta de correo electrónico pública para su trabajo político de manera que su cuenta personal se mantenga privada.</p><p class='bottom-spacing'><b>7. </b> Instale un cortafuegos (firewall) y programa antivirus o antimalware en su computadora y manténgalos actualizados.</p><p class='bottom-spacing'><b>8. </b> Pídales a sus familiares y amigos que no compartan públicamente en Internet ni redes sociales información sobre la ubicación donde usted se encuentra ni sus imágenes personales. Si alguien no respeta esta regla, limite o impida el acceso de esta persona a su información personal.</p><p class='bottom-spacing'><b>9. </b> Busque su nombre en línea periódicamente para asegurarse de que su información personal no aparezca en los resultados públicos de búsquedas sobre usted.</p><p class='bottom-spacing'><b>10. </b> Tome capturas de pantalla de toda comunicación maliciosa que reciba a través de redes sociales o Internet. Revíselas periódicamente para ver si existe algún patrón sobre las personas que las envían. Denuncie ante la policía o las autoridades correspondientes todo acoso, abuso o amenazas que reciba en línea. Providencie una copia a sus contactos de confianza.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SERVICIOS DE APOYO</div><p class='bottom-spacing'><b>1. </b> Identifique y tome nota de los datos de todos los servicios de apoyo locales o cercanos a los que tenga acceso, como por ejemplo, refugios para mujeres, clínicas de asesoría jurídica o líderes locales influyentes.</p><p class='bottom-spacing'><b>2. </b> Asegúrese de que sus acompañantes o contactos de confianza conozcan estos servicios y los contactos que usted tiene en esas organizaciones.</p><p class='bottom-spacing'><b>3. </b> Comuníquese de vez en cuando con estos servicios de apoyo de manera que sepan quién es usted en caso de que los necesite en una crisis.</p><p class='bottom-spacing'><b>4. </b> En caso de que sea necesario, identifique cuál es la mejor manera de llegar a estos lugares (caminando, manejando, en transporte público, etc.) a diferentes horas del día y la noche.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENTE</div><p class='bottom-spacing'><b>1. </b> Documente toda violencia de la que sea víctima debido a su actividad política. Por ejemplo: guarde los mensajes de voz, lleve un diario de los incidentes, o fotografíe toda evidencia de lesiones físicas. Guarde todo esto en un lugar seguro y mantenga una copia en algún lugar lejos de su casa, lugar de trabajo u oficina política.</p><p class='bottom-spacing'><b>2. </b> Cuénteles a sus contactos de confianza sobre la violencia y dígales dónde encontrar los documentos que la evidencian. Recuerde que si los archivos están encriptados o protegidos con contraseña, es necesario que se la proporcione a sus contactos de confianza.</p><p class='bottom-spacing'><b>3. </b> Busque a otras personas que estén pasando por situaciones similares y formen una red dinámica de apoyo y defensoría.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SU PLAN DE SEGURIDAD</div><p class='bottom-spacing'><b>1. </b> Comente su plan con alguien de su confianza y asegúrese de que sepa qué hacer en caso de emergencia.</p><p class='bottom-spacing'><b>2. </b> Si alguien no respeta esta regla, limite o impida acceso de esta persona a su información personal en línea o en persona.</p><p class='bottom-spacing'><b>3. </b> Enséñeles a sus familiares o miembros de su personal o equipo una señal que indique que usted o ellos están en problemas y que debe activarse el plan de emergencia (por ejemplo, ir a un lugar seguro), y practíquenlo. Cambie esta señal cada tres meses.</p><p class='bottom-spacing'><b>4. </b> Piense en una frase o dato personal (como su canción favorita) que sus familiares o contacto de confianza reconocerían en caso de que se requiera como prueba de vida. Recuérdeles esta frase o dato sin hacerlo obvio.</p><p class='bottom-spacing'><b>5. </b> Revise su plan de seguridad por lo menos cada mes para asegurarse de que esté actualizado. Recuerde informarles a sus contactos de confianza sobre cualquier cambio importante.</p></div>";
    } else if (survey.locale === "ar") {
      safetyPlan += "<bdo dir='rtl'><div class='bounding-bbox-simple' /><div style='font-family: \"Oswald\"; padding-top:50px; padding-bottom:50px; font-size: 40px; font-weight: bold; color: #1db35a;'>معدل خطر شديد</div><div style='font-family: \"Open Sans\"; color: black;'><div style='padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>جهات اتصال موثوقة</div><p class='bottom-spacing'><li>حددي 1-2 من الأشخاص أو المنظمات الموثوق بها والمعتمد عليها داخل وخارج البلد والتي يمكنك الاتصال بها للحصول على الدعم في المواقف المختلفة.</li></p><p class='bottom-spacing'><li>أحفظي تفاصيل جهات الاتصال بحيث يمكنك الوصول إليها في أي وقت. إذا لم تتمكني من حفظ التفاصيل، فابحثي عن طريقة لإخفائها في هاتفك أو دفتر العناوين أو شيء ما دائمًا معك.</li></p><p class='bottom-spacing'><li>قومي بإنشاء آليات تسجيل دخول آمنة ومضمونة (على الأقل أسبوعيًا) مع جهات الاتصال.</li></p><p class='bottom-spacing'><li>تحتاج واحدة على الأقل من جهات اتصالك الموثوق بها إلى معرفة تفاصيل خطة الأمان الخاصة بك. لا تقدمي لهم نسخة كاملة على الورق أو عن طريق البريد الإلكتروني أو الرسائل النصية. سوف يحتاجون معرفة بعض التفاصيل الأساسية في حالة حدوث أزمة. سيكون من الأفضل لو حفظوها عن ظهر قلب أو إخفائها كملاحظات على هواتفهم أو أجهزة الكمبيوتر المحمول أو داخل مذكراتهم الشخصية.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>أماكن آمنة</div><p class='bottom-spacing'><li>حددي مكانين آمنين يمكنك الهروب إليهما في حالة الطوارئ. قد يعتمد اختيارك لهذا الغرض على اعتبار وجود عائلة واطفال. قد تقررين أن أحد هذه الأماكن قد يحتاج  الابتعاد عن مدينتك أو مجتمعك أو خارج البلد.</li></p><p class='bottom-spacing'><li>أكتشفي أفضل طريقة للوصول إلى هذه الأماكن بالطرق المختلفة - كالسير، القيادة، وسائل النقل العام أو السفر الدولي في أوقات مختلفة خلال النهار والليل. كوني مستعدًة للتبديل بين الطرق المختلفة إذا كنت مضطرة لذلك.</li></p><p class='bottom-spacing'><li>تأكدي أن لديك مفتاح أو طريقة وصول سهلة إلى هذه الأماكن دون الحاجة إلى التنسيق مع شخص أخر.</li></p><p class='bottom-spacing'><li>قد تضطرين الى التخطيط عن امكانية البحث عن ملجأ لفترة ممتدة من الزمن (على الأقل أسبوع). تأكدي دائماً أن لديك مخزون من الطعام والماء وأي أدوية قد تحتاجينها وكذلك وثيقة هوية تعريفية معك. يجب عليك أيضًا الحصول على مبلغ مالي أو ائتمان كافٍ إذا احتجتِ إلى اللجوء لفترة ممتدة أو السفر خارج البلاد خلال فترة وجيزة.</li></p><p class='bottom-spacing'><li>اسمحي لجهات الاتصال الموثوق بها أن تعرف في حال كنت غير قادرة على العودة إلى المنزل وأنك ستبقين على اتصال بهم. قد لا يكون آمنا لهم أو لك اخبارهم بمكان وجودك.</li></p><p class='bottom-spacing'><li>يجب أن تخططي لأن تكوني قادرة على الانتقال إلى مكان آمن آخر إذا استمر الخطر.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>معلومات شخصية</div><p class='bottom-spacing'><li>اطلبي من عائلتك وأصدقائك عدم مشاركة معلوماتك الشخصية دون موافقتك. وهذا يشمل في ومن خلال النشر في وسائل الاعلام الاجتماعية والمحادثات. في حال عدم التزام أي شخص  بهذه القاعدة ، قومي بإيقاف وصولهم إلى معلوماتك الشخصية.</li></p><p class='bottom-spacing'><li>يمكنك استئجار صندوق بريد في مكان ما بعيدًا عن مكان إقامتك للحفاظ على سرية عنوان منزلك.</li></p><p class='bottom-spacing'><li>لا تلصقي او تسمي سلسلة مفاتيحك برقعات أو مطبوعات قد تشير لفكرة أو شيء محدد.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>وثائق مهمة</div><p class='bottom-spacing'><li>احتفظي بمجموعة وثائق الهويات التعريفية الخاصة بك أو السجلات الطبية أو المدرسية أو السياسية في أكثر من موقع آمن على ان لا يكون منزلك أو مكان عملك أو مكانًا للأنشطة السياسية الخاصة بك. قد تقرري أن واحدًا على الأقل من هؤلاء المواقع يقع خارج البلاد.</li></p><p class='bottom-spacing'><li>افعلي نفس الشيء بالنسبة لعائلتك وموظفيك وأعضاء الفريق.</li></p><p class='bottom-spacing'><li>دعي إحدى جهات الاتصال الموثوق بها تعرف أين يتم الاحتفاظ بمجموعة واحدة من وثائقك والتأكد من أن لها حق الوصول إليها دون عوائق. إذا كان لديك مجموعة خارج البلد ، فقد تحتاجين لمنح شخص ما القدرة على الوصول إلى تلك المجموعة إذا كنت بحاجة إليها.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>البيئة المحيطة بك</div><p class='bottom-spacing'><li>من المفيد الأخذ بعين الاعتبار الخضوع لتدريب امني لنفسك والحصول على دعم أمني مدرّب في حال الحاجة إليه .تأكدي من أن التدابير في منزلك ومكان عملك و مكتبك السياسي تعمل بشكل منتظم - على سبيل المثال الإضاءة المحيطة، وأجهزة الإنذار، والكاميرات، لمنع الوصول غير المصرح به.</li></p><p class='bottom-spacing'><li>احرصي دائمًا على إجراء فحص أمني لموقع وعنوان ارتباطك أو الحدث السياسي الذي ستحضرينه قبل موعده. بمجرد تقييم المناطق المحيطة، تأكدي من إجراء أي تغييرات ضرورية لتعزيز سلامتك وسلامة العامة.</li></p><p class='bottom-spacing'><li>قد تحتاجين للبحث عن نصيحة أمنية معززة من محترفين مثل الشرطة أو شركات أمن القطاع الخاص.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>السفر</div><p class='bottom-spacing'><li>خذي معك شخصًا تثقين به أثناء ممارسة الأنشطة السياسية. تأكدي بأن يكون هذا الشخص على علم بجهات اتصالك الموثوق بها ومكانك الآمن.</li></p><p class='bottom-spacing'><li>قد تحتاجين أنت وأي رفيق سفر منتظم إلى الخضوع للتدريب الأمني.</li></p><p class='bottom-spacing'><li>قومي بتحديد واستخدام طرق نقل آمنة. قومي بتغيير المسارات والأوقات التي تسافرين فيها. خذي بنظر الاعتبار وجود سائق مخصص لك.</li></p><p class='bottom-spacing'><li>دعي جهات اتصالك الموثوق بها تعلم بمكان وجودك. تأكدي من بقائهم على علم في فترات متفق عليها مسبقًا طوال مدة نشاطك السياسي وحتى عودتك إلى المنزل أو إلى القاعدة.</li></p><p class='bottom-spacing'><li>ناقشي مع جهات الاتصال الموثوق بها كيفية الاستجابة في حال لم تصلي إلى موقعك المتوقع أو كنت خارج الاتصال لفترة متفق عليها.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>البصمة الرقمية</div><p class='bottom-spacing'><li>تأكدي من أن هاتفك المحمول مقفل برمز. قومي بالوصول إلى الكمبيوتر المحمول الخاص بك باستخدام معرف عامل مزدوج. غيري كلمات المرور الخاصة بك أسبوعياً. لا تشاركي رموز الأمان أو كلمات المرور.</li></p><p class='bottom-spacing'><li>تجنبي استخدام اتصالات الإنترنت اللاسلكية العامة أو نقاط الانترنت المتنقلة لمنع تعقب معلوماتك وتقليل إمكانيات القرصنة.</li></p><p class='bottom-spacing'><li>لا تتركي أجهزتك دون رقابة، وإذا لم تستخدميها، فقومي بإيقاف تشغيلها.</li></p><p class='bottom-spacing'><li>قومي بمراجعة وتحديث إعدادات الخصوصية على الهاتف أو الكمبيوتر أو التطبيقات اسبوعياً. قومي بإيقاف خدمة الموقع على التطبيقات والوسائط الاجتماعية ومسح ذاكرة المتصفح يومياً.</li></p><p class='bottom-spacing'><li>إذا كان من المرجح أن يتم اختراق أو مصادرة أو تفتيش أجهزتك، فقومي بتشفير الملفات على جهازك وتخزين نسخة احتياطية مشفرة في مكان منفصل وآمن. دعي جهة الاتصال الموثوق بها تعلم بمكان إخفاء النسخة. استخدمي تطبيقات تشفير المحادثات في مكالماتك الهاتفية.</li></p><p class='bottom-spacing'><li>قومي بتنصيب برنامج جدار الحماية firewall و برنامج مكافحة الفيروسات anti-virus  على جهاز الكمبيوتر الخاص بك، واعملي على تحديثه بشكل اسبوعي.</li></p><p class='bottom-spacing'><li>اطلبي من عائلتك وأصدقائك عدم مشاركة معلومات عن موقعك أو صورك الشخصية علانيةً على الإنترنت أو عبر وسائل التواصل الاجتماعي.</li></p><p class='bottom-spacing'><li>ابحثي عن اسمك عبر الإنترنت بشكل دوري لضمان عدم ظهور معلوماتك الشخصية في عمليات البحث العامة عنك.</li></p><p class='bottom-spacing'><li>قومي بأخذ لقطات شاشة لأي اتصالات ضارة تصلك من خلال الشبكات الاجتماعية أو الإنترنت. راجعي هذه التقارير يومياً لمعرفة ما إذا كان هناك نمط لأولئك الذين يرسلونها. بلغي عن أي إساءات ومضايقات وتهديدات قد تصلك عبر الانترنت للشرطة والسلطات المختصة. أعطي نسخة لجهة الاتصال الموثوق بها.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>خدمات الدعم</div><p class='bottom-spacing'><li>قومي بتحديد وملاحظة تفاصيل أي خدمات دعم محلية قد تكون متاحة لك. على سبيل المثال ملاجئ النساء والعيادات القانونية أو القادة المحليين المؤثرين. أفضل المصادر لك قد تكون خارج المنطقة التي تعيش فيها أو منطقتك الجغرافية المعتادة لنشاطك السياسي، ربما حتى خارج البلاد.</li></p><p class='bottom-spacing'><li>تأكدي من أن رفقاء سفرك أو جهات الاتصال الموثوق بها تدرك أيضًا هذه المصادر وجهات الاتصال الخاصة بك في تلك المؤسسات.</li></p><p class='bottom-spacing'><li>تحققي من خدمات الدعم هذه من وقت لآخر، حتى لا تكوني غريبة عليها ان كنت بحاجة إلى الوصول إليها أثناء الأزمات.</li></p><p class='bottom-spacing'><li>في حالة ما إذا كنت بحاجة إلى ذلك، قومي بإيجاد أفضل طريقة للوصول إلى هذه الأماكن بطرق مختلفة - السير، القيادة، وسائل النقل العام - في أوقات مختلفة خلال النهار والليل. يجب عليك أيضًا تأمين الوصول إلى مبلغ مالي أو ائتمان كافٍ إذا احتجت إلى اللجوء إلى أحد هذه المصادر لفترة ممتدة أو السفر خارج البلاد خلال فترة وجيزة.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>التوثيق</div><p class='bottom-spacing'><li>توثيق أي عنف تتعرضين له كنتيجة لنشاطك السياسي. على سبيل المثال، أحتفظي بالرسائل الصوتية، تسجيلات الأحداث، تصوير أي دليل على إصابات جسدية وتخزينها بشكل آمن. قومي بتخزين هذا بشكل آمن واحتفظي بنسخة احتياطية مخزنة في مكان ما بعيدًا عن منزلك أو مكان عملك أو مكتبك السياسي.</li></p><p class='bottom-spacing'><li>أخبري جهات الاتصال الموثوق بها عن العنف الذي تتعرضين له وأين من الممكن إيجاد الوثائق المخزنة من قبلك. تذكري أنه إذا كانت الوثائق محمية بكلمة مرور أو مشفرة، ستحتاجين إلى تقديمها إلى جهة الاتصال الموثوق بها.</li></p><p class='bottom-spacing'><li>قومي بتقديم نسخة من وثائقك إلى محامٍ أو منظمة لحقوق الإنسان، مع تعليمات حول كيفية استخدامها.</li></p><p class='bottom-spacing'><li>قومي بالبحث عن الآخرين الذين قد يواجهون حالات مماثلة، و اعملي على تطوير شبكة دعم وإسناد حيوية و مؤيدة لك.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>خطة السلامة الخاصة بك</div><p class='bottom-spacing'><li>ناقشي خطة السلامة الخاصة بك مع شخص واحد تثقين به حيث يكون هذا الشخص خارج البلاد. تأكدي من أنه يعرف ما يجب القيام به في حالات الطوارئ. تذكري ان هذا الشخص قد يحتاج إلى اتخاذ إجراءات أخرى نيابة عنك (مثل التقاط أطفالك) أو الوصول السريع إلى المفاتيح أو المال أو المستندات نيابة عنك.</li></p><p class='bottom-spacing'><li>تأكدي من أن العائلة والأصدقاء لن يعطلوا عن غير قصد خطة الأمان الخاصة بك - على سبيل المثال عن طريق نشر معلومات شخصية عنك أو عنهم علانية.  في حال عدم التزام أي شخص  بهذه القاعدة ، قومي بإيقاف وصولهم إلى معلوماتك الشخصية وحسابك الشخصي.</li></p><p class='bottom-spacing'><li>قومي بتدريب وتلقين فريقك وموظفيك وعائلتك بأشارة أو رمز في حال كنت أنت او هم في ورطة وعلى أثرها قومي بتفعيل خطة الطوارئ الخاصة بك - على سبيل المثال، الذهاب إلى مكان آمن. غيري الإشارة او الرمز كل اسبوع.</li></p><p class='bottom-spacing'><li>فكري في عبارة أو حقيقة شخصية عنك (مثل الأغنية المفضلة لديك) والتي قد تتعرف عليها عائلتك أو جهة الاتصال المعينة بك حيث يمكنك استخدامها كدليل على بقائك على قيد الحياة. ذكّري الأشخاص بهذه العبارة أو الحقيقة بدون جعلها واضحة للعلن.</li></p><p class='bottom-spacing'><li>راجعي خطة السلامة الخاصة بك على الأقل كل أسبوع للتأكد من تحديثها. تذكري السماح لجهة (جهات) الاتصال الموثوق بها بمعرفة أي تغييرات مهمة لوضعك العام ولخطة السلامة الخاصة بك.</li></p></div><bdo>";
    }
  } else if (displayScore >= calculatedScores[countryScore + '']["M"][0] && displayScore <= calculatedScores[countryScore + '']["M"][1]) {
    if (survey.locale === "en") {
      safetyPlan += "<div class='bounding-bbox-simple' /><div style='font-family: \"Oswald\"; padding-top:50px; padding-bottom:50px; font-size: 40px; font-weight: bold; color: #1db35a;'>MODERATE RISK</div><div style='font-family: \"Open Sans\"; color: black;'><div style='padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>TRUSTED CONTACTS</div><p class='bottom-spacing'><b>1. </b> Identify 1-2 trusted, reliable people or organizations that you could contact for support in different situations.</p><p class='bottom-spacing'><b>2. </b> Memorize their contact details so that you can reach them at any time. If you cannot memorize the details, find a way to disguise them in your phone, address book, or something that is always with you.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SAFE PLACES</div><p class='bottom-spacing'><b>1. </b> Identify 1-2 safe places you can escape to in an emergency. Where you choose for this purpose will depend on whether or not you need to consider children or family as well.</p><p class='bottom-spacing'><b>2. </b> Work out the best way to reach these places by different methods - walk, drive, public transport.</p><p class='bottom-spacing'><b>3. </b> Always have a snack and some water, as well as any medicines you may need, an ID document, and money or a bank card with you, in case you cannot go home.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>PERSONAL INFORMATION</div><p class='bottom-spacing'><b>1. </b> Keep your personal information private and only available to those close to you.</p><p class='bottom-spacing'><b>2. </b> Ask your family and friends not to share your personal information without your consent. This includes in/through social media postings and conversations.</p><p class='bottom-spacing'><b>3. </b> If your home address or personal phone number is routinely listed publicly, take steps to make it private.</p><p class='bottom-spacing'><b>4. </b> Do not label your keys with specific identifiers.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>IMPORTANT DOCUMENTS</div><p class='bottom-spacing'><b>1. </b> Keep a set of your ID documents, medical, school or political records in a safe place that is not your home, workplace or a location for your political activities.</p><p class='bottom-spacing'><b>2. </b> Do the same for your immediate family, staff, and team members.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>YOUR SURROUNDINGS</div><p class='bottom-spacing'><b>1. </b> Always assess your surroundings when carrying out political activities. Check for easy exits and ask that a path be kept clear if there isn’t one.</p><p class='bottom-spacing'><b>2. </b> Review the physical security of your home, workplace or political location. Ensure that measures - e.g. perimeter lighting, alarms, cameras - are in place at your home, workplace and political office, to prevent unauthorized access.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>TRAVELING</div><p class='bottom-spacing'><b>1. </b> Take someone you trust with you as you go about your political activities.</p><p class='bottom-spacing'><b>2. </b> Identify and use safe transportation routes. Vary the routes and the times that you travel.</p><p class='bottom-spacing'><b>3. </b> Let your trusted contacts know where you are going to be and when you will return home.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DIGITAL FOOTPRINT</div><p class='bottom-spacing'><b>1. </b> Ensure your mobile phone has a lock code. Access your laptop with dual-factor ID. Change your passwords every 3 months. Do not share security codes or passwords. Do not store passwords or sensitive information in your internet browser.</p><p class='bottom-spacing'><b>2. </b> Do not leave your devices unattended, and if you are not using them switch them off.</p><p class='bottom-spacing'><b>3. </b> Avoid keeping sensitive information in your phone’s memory. Review and update your privacy settings on your phone, computer or apps. Turn off location services on apps and social media. Clear your browser history regularly.</p><p class='bottom-spacing'><b>4. </b> Back-up important information or sensitive digital files in a secure place.</p><p class='bottom-spacing'><b>5. </b> Create a public email account for your political work so that your personal account remains private.</p><p class='bottom-spacing'><b>6. </b> Install a firewall and anti-virus/malware software on your computer, and keep it updated.</p><p class='bottom-spacing'><b>7. </b> Ask your family and friends not to share information about your location or personal images of you publicly on the internet or through social media.</p><p class='bottom-spacing'><b>8. </b> Take screenshots of any malicious communications you receive through social media or the internet. Review these periodically to see if there is a pattern to those who are sending them. Report any online harassment, abuse or threats that you receive to the police or relevant authorities.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SUPPORT SERVICES</div><p class='bottom-spacing'><b>1. </b> Identify and note the details of any local support services that might be available to you. For example women’s shelters, legal clinics, or influential local leaders.</p><p class='bottom-spacing'><b>2. </b> Ensure your travel companions or trusted contact(s) are also aware of these services, and your contacts at these organizations.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENT</div><p class='bottom-spacing'><b>1. </b> Document any violence that you experience as a result of your political activity. For example, save voice messages, keep a journal of incidents, photograph any evidence of physical injuries. Store this securely.</p><p class='bottom-spacing'><b>2. </b> Tell your trusted contact(s) about the violence and where to find the documentation.</p><p class='bottom-spacing'><b>3. </b> Seek out others who may be experiencing similar situations, and develop a dynamic support and advocacy network.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>YOUR SAFETY PLAN</div><p class='bottom-spacing'><b>1. </b> Discuss your safety plan with one person you trust. Make sure they know what to do in an emergency.</p><p class='bottom-spacing'><b>2. </b> Ensure that family and friends are not unintentionally undermining your safety plan - for example by posting personal information about you/themselves publicly.</p><p class='bottom-spacing'><b>3. </b> Teach and practice a signal for your team/staff or family to indicate if you or they are in trouble and to activate your emergency plan - for example to go to a safe place.</p><p class='bottom-spacing'><b>4. </b> Think of a phrase or personal fact (e.g. your favorite song) that your family or designated contact would recognize which you can use as a proof of life. Remind people of this phrase or fact without making it obvious.</p><p class='bottom-spacing'><b>5. </b> Review your safety plan at least every 3 months to make sure it is up to date. Remember to let your trusted contact(s) know about any important changes.</p></div>";
    } else if (survey.locale === "fr") {
      safetyPlan += "<div class='bounding-bbox-simple' /><div style='font-family: \"Oswald\"; padding-top:50px; padding-bottom:50px; font-size: 40px; font-weight: bold; color: #1db35a;'>RISQUE MODÉRÉ</div><div style='font-family: \"Open Sans\"; color: black;'><div style='padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>CONTACTS DE CONFIANCE</div><p class='bottom-spacing'><b>1. </b> Identifier 1 ou 2 personnes ou organisations fiables et de confiance auxquelles vous pouvez vous adresser pour obtenir de l’aide dans différentes situations.</p><p class='bottom-spacing'><b>2. </b> Mémoriser leurs coordonnées afin que vous puissiez les joindre à tout moment. Si vous ne pouvez pas mémoriser les coordonnées, trouvez un moyen de les dissimuler dans votre téléphone, votre carnet d’adresses, ou quelque chose qui est toujours avec vous.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>LIEUX SÛRS</div><p class='bottom-spacing'><b>1. </b> Identifier 1-2 endroits sûrs où vous pouvez vous échapper en cas d’urgence. Où que vous choisissiez à cette fin dépendra de savoir si vous devez ou non considérer les enfants ou la famille.</p><p class='bottom-spacing'><b>2. </b> Déterminer la meilleure façon d’atteindre ces lieux par différentes méthodes - marcher, conduire, les transports en commun.</p><p class='bottom-spacing'><b>3. </b> Avoir toujours une collation et de l’eau, ainsi que tout médicament dont vous pourriez avoir besoin, une pièce d’identité et de l’argent ou une carte bancaire si vous ne pouvez pas rentrer chez vous.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>INFORMATIONS PERSONNELLES</div><p class='bottom-spacing'><b>1. </b> Garder vos informations personnelles privées et disponibles seulement pour vos proches.</p><p class='bottom-spacing'><b>2. </b> Demander à votre famille et à vos amis de ne pas partager vos informations personnelles sans votre consentement. Cela inclut dans / par les médias sociaux et les conversations.</p><p class='bottom-spacing'><b>3. </b> Si votre adresse personnelle ou votre numéro de téléphone personnel est régulièrement répertorié, prendre des mesures pour le rendre privé.</p><p class='bottom-spacing'><b>4. </b> Ne pas étiqueter vos clés avec des identificateurs spécifiques.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENTS IMPORTANTS</div><p class='bottom-spacing'><b>1. </b> Conserver une série de documents d’identité, de dossiers médicaux, scolaires ou politiques dans un endroit sûr qui n’est pas votre domicile, votre lieu de travail ou un lieu pour vos activités politiques.</p><p class='bottom-spacing'><b>2. </b> Faire la même chose pour votre famille immédiate, votre personnel et les membres de votre équipe.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>VOS ENVIRONS</div><p class='bottom-spacing'><b>1. </b> Toujours évaluer votre environnement lors de la réalisation d’activités politiques. Vérifier les sorties faciles et demander à ce qu’un chemin soit dégagé s’il n’y en a pas.</p><p class='bottom-spacing'><b>2. </b> Examiner la sécurité physique de votre domicile, de votre lieu de travail ou de votre lieu politique. Vous assurer que les mesures - par exemple, éclairage de périmètre, alarmes, caméras - sont en place à votre domicile, sur votre lieu de travail et dans votre bureau politique, afin d’empêcher tout accès non autorisé.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>VOYAGER</div><p class='bottom-spacing'><b>1. </b> Prendre quelqu’un avec qui vous avez confiance dans vos activités politiques.</p><p class='bottom-spacing'><b>2. </b> Identifier et utiliser des voies de transport sûres. Varier les itinéraires et les heures que vous parcourez.</p><p class='bottom-spacing'><b>3. </b> Laisser vos contacts de confiance savoir où vous allez être et quand vous rentrerez chez vous.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>EMPREINTE NUMÉRIQUE</div><p class='bottom-spacing'><b>1. </b> Vous assurer que votre téléphone portable a un code de verrouillage. Accéder à votre ordinateur portable avec un identifiant double facteur. Changer vos mots de passe tous les 3 mois. Ne pas partager les codes de sécurité ou les mots de passe. Ne pas stocker de mots de passe ou d’informations sensibles dans votre navigateur Internet.</p><p class='bottom-spacing'><b>2. </b> Ne pas laisser vos appareils sans surveillance et, si vous ne les utilisez pas, les désactiver.</p><p class='bottom-spacing'><b>3. </b> Éviter de garder des informations sensibles dans la mémoire de votre téléphone. Vérifier et mettre à jour vos paramètres de confidentialité sur votre téléphone, votre ordinateur ou vos applications. Désactiver les services de localisation sur les applications et les réseaux sociaux. Effacer l’historique de votre navigateur régulièrement.</p><p class='bottom-spacing'><b>4. </b> Sauvegarder des informations importantes ou des fichiers numériques sensibles dans un lieu sécurisé.</p><p class='bottom-spacing'><b>5. </b> Créer un compte de messagerie public pour votre travail politique afin que votre compte personnel reste privé.</p><p class='bottom-spacing'><b>6. </b> Installer un pare-feu et un anti-virus / logiciel malveillant sur votre ordinateur, et le conserver à jour.</p><p class='bottom-spacing'><b>7. </b> Demander à votre famille et à vos amis de ne pas partager d’informations sur votre position ou vos images personnelles sur Internet ou sur les réseaux sociaux.</p><p class='bottom-spacing'><b>8. </b> Prendre des captures d’écran de toutes les communications malveillantes que vous recevez sur les médias sociaux ou sur Internet. Les examiner périodiquement pour voir s’il existe un modèle pour ceux qui les envoient. Signaler tout harcèlement, abus ou menace en ligne que vous recevez à la police ou aux autorités compétentes.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SERVICES DE SOUTIEN</div><p class='bottom-spacing'><b>1. </b> Identifier et noter les détails de tout service de support local qui est disponible dans votre communauté. Par exemple les refuges pour femmes ou les cliniques juridiques ou les leaders locaux influents.</p><p class='bottom-spacing'><b>2. </b> Vous assurer que vos compagnons de voyage ou vos contacts de confiance connaissent également ces ressources et vos contacts dans ces organisations.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENTER</div><p class='bottom-spacing'><b>1. </b> Documenter toute violence que vous rencontrez en raison de votre activité politique. Par exemple, enregistrer des messages vocaux, tenir un journal des incidents, photographier toute preuve de blessures physiques. Conserver ceci en toute sécurité.</p><p class='bottom-spacing'><b>2. </b> Dire à vos contacts de confiance de la violence et où trouver la documentation.</p><p class='bottom-spacing'><b>3. </b> Rechercher d’autres personnes susceptibles de connaître des situations similaires et développer un réseau de soutien et de plaidoyer dynamique.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>PLAN DE SÉCURITÉ</div><p class='bottom-spacing'><b>1. </b> Discuter de votre plan de sécurité avec une personne en qui vous avez confiance. Vous assurer qu’il/elle sait quoi faire en cas d’urgence.</p><p class='bottom-spacing'><b>2. </b> Vous assurer que votre famille et vos amis ne compromettent pas involontairement votre plan de sécurité, par exemple, en publiant publiquement des informations personnelles vous concernant.</p><p class='bottom-spacing'><b>3. </b> Enseigner et pratiquer un signal pour votre équipe / votre personnel ou votre famille pour indiquer si vous ou eux êtes en difficulté et pour activer votre plan d’urgence - par exemple, aller dans un endroit sûr.</p><p class='bottom-spacing'><b>4. </b> Penser à une phrase ou à un fait personnel (par exemple, votre chanson préférée) que votre famille ou votre interlocuteur désigné reconnaîtrait et que vous pourriez utiliser comme preuve de vie. Rappelez aux gens cette phrase ou ce fait sans le rendre évident.</p><p class='bottom-spacing'><b>5. </b> Réviser votre plan de sécurité au moins tous les trois mois pour vous assurer qu’il est à jour. Ne pas oublier d’informer vos contacts de confiance de tout changement important.</p></div>";
    } else if (survey.locale === "es") {
      safetyPlan += "<div class='bounding-bbox-simple' /><div style='font-family: \"Oswald\"; padding-top:50px; padding-bottom:50px; font-size: 40px; font-weight: bold; color: #1db35a;'>RIESGO MODERADO</div><div style='font-family: \"Open Sans\"; color: black;'><div style='padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>CONTACTOS DE CONFIANZA</div><p class='bottom-spacing'><b>1. </b> Identifique a una o dos personas u organizaciones de confianza a las que pueda contactar para recibir apoyo en distintas situaciones.</p><p class='bottom-spacing'><b>2. </b> Memorice su información de contacto de manera que pueda comunicarse con ellas en cualquier momento. Si no puede memorizar la información de contacto, busque la manera de ocultarla en su teléfono, libreta de direcciones o en algo que lleve siempre consigo.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>LUGARES SEGUROS</div><p class='bottom-spacing'><b>1. </b> Identifique uno o dos lugares seguros a los que pueda huir para refugiarse en caso de una emergencia. Los lugares que elija con este fin dependerán de si necesita o no considerar también a niños o familiares.</p><p class='bottom-spacing'><b>2. </b> Identifique la mejor forma de llegar a estos lugares de distintas maneras (caminando, manejando, en transporte público).</p><p class='bottom-spacing'><b>3. </b> Siempre lleve consigo algo de comida y agua, los medicamentos que pueda necesitar, algún documento de identificación y dinero o tarjetas bancarias en caso de que no pueda regresar a su casa.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>INFORMACIÓN PERSONAL</div><p class='bottom-spacing'><b>1. </b> Mantenga su información personal privada y disponible únicamente para las personas más cercanas a usted.</p><p class='bottom-spacing'><b>2. </b> Pídales a sus familiares y amigos que no compartan con nadie su información personal sin su consentimiento, incluyendo conversaciones y publicaciones en redes sociales.</p><p class='bottom-spacing'><b>3. </b> Si el domicilio de su casa o número de teléfono personal son públicos, tome medidas para mantenerlos privados.</p><p class='bottom-spacing'><b>4. </b> No etiquete sus llaves con identificadores específicos.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENTOS IMPORTANTES</div><p class='bottom-spacing'><b>1. </b> Conserve un juego de sus documentos médicos o de identidad y sus registros escolares o políticos en un lugar seguro que no sea su casa, su lugar de trabajo ni ninguno de los lugares en los que realiza sus actividades políticas.</p><p class='bottom-spacing'><b>2. </b> Haga lo mismo para sus familiares o miembros de su personal o equipo más cercanos.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SU ENTORNO</div><p class='bottom-spacing'><b>1. </b> Siempre revise todo lo que hay a su alrededor cuando lleve a cabo actividades políticas. Busque una salida fácil y pida que se mantenga libre una ruta de salida en caso que no haya una.</p><p class='bottom-spacing'><b>2. </b> Revise la seguridad física de su casa, lugar de trabajo o los lugares donde realice actividades políticas. Asegúrese de que se implementen medidas (como iluminación perimetral, alarmas, cámaras) en su casa, lugar de trabajo y oficina política para evitar el acceso no autorizado.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>VIAJES</div><p class='bottom-spacing'><b>1. </b> Asegúrese de estar acompañada por una persona de confianza cuando realice sus actividades políticas.</p><p class='bottom-spacing'><b>2. </b> Identifique y utilice rutas de transporte seguras. Varíe las rutas y los horarios en los que viaje.</p><p class='bottom-spacing'><b>3. </b> Avíseles a sus contactos de confianza en dónde estará y a qué hora regresará a casa.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>INFORMACIÓN DIGITAL</div><p class='bottom-spacing'><b>1. </b> Asegúrese de que su teléfono celular tenga un código de bloqueo. Habilite la función de verificación de dos pasos para acceder a su computadora portátil. Cambie sus contraseñas cada tres meses. No comparta sus códigos de seguridad ni contraseñas. No guarde contraseñas ni otra información delicada en su navegador de Internet.</p><p class='bottom-spacing'><b>2. </b> No pierda de vista sus dispositivos y apáguelos cuando no los esté utilizando.</p><p class='bottom-spacing'><b>3. </b> Evite guardar información delicada en la memoria de su teléfono. Revise y actualice la configuración de seguridad de su teléfono, computadora o aplicaciones. Apague los servicios de localización de las aplicaciones y redes sociales. Borre periódicamente el historial de su navegador.</p><p class='bottom-spacing'><b>4. </b> Respalde los archivos digitales importantes o confidenciales en algún lugar seguro.</p><p class='bottom-spacing'><b>5. </b> Cree una cuenta de correo electrónico pública para su trabajo político de manera que su cuenta personal se mantenga privada.</p><p class='bottom-spacing'><b>6. </b> Instale un cortafuegos (firewall) y programa antivirus o antimalware en su computadora y manténgalos actualizados.</p><p class='bottom-spacing'><b>7. </b> Pídales a sus familiares y amigos que no compartan públicamente en Internet ni en redes sociales información sobre la ubicación donde usted se encuentra ni sus imágenes personales.</p><p class='bottom-spacing'><b>8. </b> Tome capturas de pantalla de toda comunicación maliciosa que reciba a través de redes sociales o Internet. Revíselas periódicamente para ver si existe algún patrón sobre las personas que las envían. Denuncie ante la policía o las autoridades correspondientes todo acoso, abuso o amenazas que reciba en línea.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SERVICIOS DE APOYO</div><p class='bottom-spacing'><b>1. </b> Identifique y tome nota de los datos de todos los servicios de apoyo locales a los que tenga acceso, como por ejemplo, refugios para mujeres, clínicas de asesoría jurídica o líderes locales influyentes.</p><p class='bottom-spacing'><b>2. </b> Asegúrese de que sus acompañantes o contactos de confianza conozcan estos servicios y los contactos que usted tiene en ellas.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>DOCUMENTE</div><p class='bottom-spacing'><b>1. </b> Documente toda violencia de la que sea víctima debido a su actividad política. Por ejemplo: guarde los mensajes de voz, lleve un diario de los incidentes, o fotografíe toda evidencia de lesiones físicas. Guarde todo esto en un lugar seguro.</p><p class='bottom-spacing'><b>2. </b> Cuénteles a sus contactos de confianza sobre la violencia y dígales dónde encontrar los documentos que la evidencian.</p><p class='bottom-spacing'><b>3. </b> Busque a otras personas que estén pasando por situaciones similares y formen una red dinámica de apoyo y defensoría.</p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>SU PLAN DE SEGURIDAD</div><p class='bottom-spacing'><b>1. </b> Comente su plan con alguien de su confianza y asegúrese de que sepa qué hacer en caso de emergencia.</p><p class='bottom-spacing'><b>2. </b> Asegúrese de que sus familiares y amigos no afecten accidentalmente su plan de seguridad (por ejemplo, al publicar información personal sobre usted o ellos mismos).</p><p class='bottom-spacing'><b>3. </b> Enséñeles a sus familiares o miembros de su personal o equipo una señal que indique que usted o ellos están en problemas y que debe activarse el plan de emergencia (por ejemplo, ir a un lugar seguro), y practíquenlo.</p><p class='bottom-spacing'><b>4. </b> Piense en una frase o dato personal (como su canción favorita) que sus familiares o contacto de confianza reconocerían en caso de que se requiera como prueba de vida. Recuérdeles esta frase o dato sin hacerlo obvio.</p><p class='bottom-spacing'><b>5. </b> Revise su plan de seguridad por lo menos cada tres meses para asegurarse de que esté actualizado. Recuerde informarles a sus contactos de confianza sobre todo cambio importante.</p></div>";
    } else if (survey.locale === "ar") {
      safetyPlan += "<bdo dir='rtl'><div class='bounding-bbox-simple' /><div style='font-family: \"Oswald\"; padding-top:50px; padding-bottom:50px; font-size: 40px; font-weight: bold; color: #1db35a;'>معدل خطر متوسط</div><div style='font-family: \"Open Sans\"; color: black;'><div style='padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>جهات اتصال موثوقة</div><p class='bottom-spacing'><li>حددي 1-2 من الأشخاص أو المنظمات الموثوق بها والمعتمد عليها والتي يمكنك الاتصال بها للحصول على الدعم في المواقف المختلفة.</li></p><p class='bottom-spacing'><li>أحفظي تفاصيل جهات الاتصال بحيث يمكنك الوصول إليها في أي وقت. إذا لم تتمكني من حفظ التفاصيل، فابحثي عن طريقة لإخفائها في هاتفك أو دفتر العناوين أو شيء ما دائمًا معك.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>أماكن آمنة</div><p class='bottom-spacing'><li>حددي 1-2 من الأماكن الآمنة التي يمكنك الهروب إليها في حالة الطوارئ. قد يعتمد اختيارك لهذا الغرض على اعتبار وجود عائلة واطفال.</li></p><p class='bottom-spacing'><li>اكتشفي أفضل طريقة للوصول إلى هذه الأماكن بالطرق المختلفة - كالمشي، القيادة أو وسائل النقل العام.</li></p><p class='bottom-spacing'><li>احرصي دائمًا على حمل وجبة خفيفة وبعض الماء، بالإضافة إلى أي أدوية قد تحتاجينها، أو مستند إثبات الهوية، و نقود أو بطاقة مصرفية معك، في حالة عدم قدرتك على العودة إلى المنزل.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>معلومات شخصية</div><p class='bottom-spacing'><li>احتفظي بمعلوماتك الشخصية بشكل خاص وسري على أن تكون متوفرة لأولئك المقربين إليك.</li></p><p class='bottom-spacing'><li>اطلبي من عائلتك وأصدقائك عدم مشاركة معلوماتك الشخصية دون موافقتك. وهذا يشمل في و من خلال النشر في وسائل الاعلام الاجتماعية والمحادثات.</li></p><p class='bottom-spacing'><li>أذا كان عنوان منزلك أو رقم هاتفك الشخصي مسجلًا علانيةً بالعادة فعليكِ اتخاذ التدابير اللازمة للحفاظ عليها و إزالتها من الجهات الخارجية.</li></p><p class='bottom-spacing'><li>لا تلصقي او تسمي سلسلة مفاتيحك برقعات أو مطبوعات قد تشير لفكرة أو شيء محدد.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>وثائق مهمة</div><p class='bottom-spacing'><li>احتفظي  بمستندات الهويات التعريفية أو السجلات الطبية أو المدرسية أو السياسية في مكان آمناً على ان لا يكون في منزلك أو مكان عملك أو مكانًا لأنشطتك السياسية.</li></p><p class='bottom-spacing'><li>افعلي نفس الشيء بالنسبة لعائلتك وموظفيك وأعضاء الفريق.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>البيئة المحيطة بك</div><p class='bottom-spacing'><li>قومي بتقييم محيطك عند القيام بأنشطة سياسية دائماً. تحققي من وجود مخارج سهلة واطلبي أن يبقى المسار واضحا إذا لم يكن هناك مسار.</li></p><p class='bottom-spacing'><li>قومي بتفقد حماية الممتلكات المادية في منزلك أو مكان عملك أو مكان عملك السياسي. تأكدي من أن التدابير - على سبيل المثال الإضاءة المحيطة ، وأجهزة الإنذار ، والكاميرات - موجودة في منزلك ، ومكان عملك ومكتبك السياسي، لمنع الوصول غير المصرح به.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>السفر</div><p class='bottom-spacing'><li>خذي معك شخصًا تثقين به أثناء ممارسة الأنشطة السياسية.</li></p><p class='bottom-spacing'><li>قومي بتحديد واستخدام طرق النقل الآمنة. قومي بتغيير المسارات والأوقات التي تسافرين فيها.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>البصمة الرقمية</div><p class='bottom-spacing'><li>تأكدي من أن هاتفك المحمول مقفل برمز. قومي بالوصول إلى الكمبيوتر المحمول الخاص بك باستخدام معرف عامل مزدوج. غيري كلمات المرور الخاصة بك كل 3 أشهر. لا تشاركي رموز الأمان أو كلمات المرور. لا تخزني كلمات المرور أو المعلومات الحساسة في متصفح الإنترنت الخاص بك.</li></p><p class='bottom-spacing'><li>لا تتركي أجهزتك دون رقابة، وإذا لم تكوني تستخدمينها، فقومي بإيقاف تشغيلها.</li></p><p class='bottom-spacing'><li>تجنبي الاحتفاظ بالمعلومات الحساسة في ذاكرة هاتفك. قومي بمراجعة وتحديث إعدادات الخصوصية على الهاتف أو الكمبيوتر أو التطبيقات. قومي بإيقاف خدمة الموقع على التطبيقات والوسائط الاجتماعية و مسح ذاكرة المتصفح بانتظام.</li></p><p class='bottom-spacing'><li>قومي بخزن نسخة احتياطية من المعلومات المهمة أو الملفات الرقمية الحساسة في مكان آمن.</li></p><p class='bottom-spacing'><li>قومي بإنشاء حساب بريد إلكتروني عام لعملك السياسي بحيث يبقى حسابك الشخصي خاصًا.</li></p><p class='bottom-spacing'><li>قومي بتنصيب برنامج جدار الحماية firewall و برنامج مكافحة الفيروسات anti-virus على جهاز الكمبيوتر الخاص بك، وحافظي على تحديثه.</li></p><p class='bottom-spacing'><li>اطلبي من عائلتك وأصدقائك عدم مشاركة معلومات عن موقعك أو صورك الشخصية علانية على الإنترنت أو عبر وسائل التواصل الاجتماعي.</li></p><p class='bottom-spacing'><li>قومي بأخذ لقطات شاشة لأي اتصالات ضارة تصلك من خلال الشبكات الاجتماعية أو الإنترنت. راجعي هذه الأمور دوريًا لمعرفة ما إذا كان هناك نمط لأولئك الذين يرسلونها. بلغي عن أي إساءات و مضايقات وتهديدات قد تصلك عبر الانترنت للشرطة و السلطات المختصة.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>خدمات الدعم</div><p class='bottom-spacing'><li>قومي بتحديد وملاحظة تفاصيل أي خدمات دعم محلية قد تكون متاحة لك. على سبيل المثال ملاجئ النساء و العيادات القانونية أو القادة المحليين المؤثرين.</li></p><p class='bottom-spacing'><li>تأكدي من أن رفقاء سفرك أو جهات الاتصال الموثوق بها هم أيضا على علم بهذه المصادر، وكذلك بجهات الاتصال الخاصة بك في تلك المنظمات.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>التوثيق</div><p class='bottom-spacing'><li>قومي بتوثيق أي عنف تتعرضين له كنتيجة لنشاطك السياسي. على سبيل المثال، أحتفظي بالرسائل الصوتية، تسجيلات الأحداث، تصوير أي دليل على إصابات جسدية. قومي بتخزين هذا بشكل آمن.</li></p><p class='bottom-spacing'><li>أخبري جهات الاتصال الموثوق بها عن العنف الذي تتعرضين له وأين من الممكن إيجاد الوثائق المخزنة من قبلك.</li></p><p class='bottom-spacing'><li>قومي بالبحث عن الآخرين الذين قد يواجهون حالات مماثلة، و اعملي على تطوير شبكة دعم وإسناد حيوية و مؤيدة لك.</li></p><div style='padding-top:24px; padding-bottom:8px; font-size: 20px; font-weight: bold; color: black;'>خطة السلامة الخاصة بك</div><p class='bottom-spacing'><li>ناقشي خطة السلامة الخاصة بك مع شخص واحد تثقين به. تأكدي من أنه يعرف ما يجب القيام به في حالات الطوارئ.</li></p><p class='bottom-spacing'><li>تأكدي من أن العائلة والأصدقاء لن يعطلوا عن غير قصد خطة الأمان الخاصة بك - على سبيل المثال عن طريق نشر معلومات شخصية عنك أو عنهم علانية.</li></p><p class='bottom-spacing'><li>قومي بتدريب وتلقين فريقك وموظفيك وعائلتك بأشارة أو رمز في حال كنت أنت او هم في مأزق وعلى اثرها قومي بتفعيل خطة الطوارئ الخاصة بك - على سبيل المثال، الذهاب إلى مكان آمن.</li></p><p class='bottom-spacing'><li>فكري في عبارة أو حقيقة شخصية عنك (مثل الأغنية المفضلة لديك) والتي قد تتعرف عليها عائلتك أو جهة الاتصال المعينة بك حيث يمكنك استخدامها كدليل على بقائك على قيد الحياة. ذكّري الأشخاص بهذه العبارة أو الحقيقة بدون جعلها واضحة للعلن.</li></p><p class='bottom-spacing'><li>راجعي خطة السلامة الخاصة بك على الأقل كل 3 أشهر للتأكد من تحديثها. تذكري السماح لجهات الاتصال الموثوق بها بمعرفة أي تغييرات مهمة.</li></p></div><bdo>";
    }
  } /* Score Display */
  var scoreDisplayHTML = sLabel + ":" + displayScore; /* Summary */
  if (survey.locale === "en") {
    safetyPlan += "<div style='padding-top:35px; padding-bottom:8px; font-size: 14px; font-weight: bold; color: gray;'><p><li>Below you can print the results of your safety plan to keep for yourself. You should keep your safety plan private, and only release details as suggested by the safety plan itself.</li><li>By clicking share below, you can also let your social networks know about the tool.</li></p><div><button style='margin-top: 10px; margin-bottom: 20px;' id='printSurvey' type='button' class='btn btn-success' onclick='window.print()'>Print My Safety Plan</button>";
  } else if (survey.locale === "es") {
    safetyPlan += "<div style='padding-top:35px; padding-bottom:8px; font-size: 14px; font-weight: bold; color: gray;'><p><li>Más abajo puede imprimir los resultados de su plan de seguridad para tenerlo. Debe mantener la privacidad de su plan de seguridad y solo divulgar los detalles como lo sugiere el propio plan.</li><li>Al hacer clic en compartir a continuación, también puede informar a sus redes sociales sobre la herramienta.</li></p><div><button style='margin-top: 10px; margin-bottom: 20px;' id='printSurvey' type='button' class='btn btn-success' onclick='window.print()'>Imprimir mi plan de seguridad</button>";
  } else if (survey.locale === "fr") {
    safetyPlan += "<div style='padding-top:35px; padding-bottom:8px; font-size: 14px; font-weight: bold; color: gray;'><p><li>En dessous vous pouvez imprimer les résultats de votre plan de sécurité pour le garder. Vous devriez vous assurer que ce plan reste privé et ne partagez que les détails qui sont suggérés par le plan même.</li><li>En cliquant sur le partage ci-dessous, vous pouvez également informer vos réseaux sociaux de l'outil.</li></p><div><button style='margin-top: 10px; margin-bottom: 20px;' id='printSurvey' type='button' class='btn btn-success' onclick='window.print()'>Imprimer mon plan de sécurité</button>";
  } else if (survey.locale === "ar") {
    safetyPlan += "<bdo dir='rtl'><div style='padding-top:35px; padding-bottom:8px; font-size: 14px; font-weight: bold; color: gray;'><p><li>أدناه يمكنكِ طباعة نتائج خطة السلامة الخاصة بكِ للاحتفاظ بها لنفسكِ.</li><li>يجب عليكِ الحفاظ على سرية خطة الأمان الخاصة بكِ، و التصريح فقط بالتفاصيل كما هو مقترح في خطة السلامة نفسها.</li></p><div><button style='margin-top: 10px; margin-bottom: 20px;' id='printSurvey' type='button' class='btn btn-success' onclick='window.print()'>أطبع خطة السلامة الخاصة بي</button></bdo>";
  }
  document.querySelector('.w3-light-grey').style['display'] = 'none';
  document.querySelector('#surveyResult').innerHTML = safetyPlan;
});

survey.onUpdateQuestionCssClasses.add(function (survey, options) {
  var classes = options.cssClasses
  if (options.question.getType() === "rating") {
    classes.item = "";
  }
});
