---
title: Día 0 - ¿Por qué decidí transicionar a Linux?
tags:
  - linux
  - software
  - life-style
  - journey
draft: true
---
## Primer Contacto

Mí experiencia con Linux ha sido algo *inconsistente*, ya que mi primer contacto con este Sistema operativo fue al momento de empezar mi posición como *Technical Support Engineer* cuando trabajaba para la cuenta de [Cisco](https://www.cisco.com/) en [Foundever](https://foundever.com/es/).

Dentro de mis responsabilidades tenia que darle soporte a dos servidores de Cisco los cuales sus sistemas operativos eran basados en Linux:

- [Cisco Prime Infrastructure](https://www.cisco.com/site/es/es/products/networking/index.html): es una plataforma de gestión que permite administrar, monitorear y optimizar redes Cisco, proporcionando herramientas para la configuración, monitoreo de rendimiento, resolución de problemas y gestión de dispositivos en una red.
- [Cisco SSM On-Prem](https://www.cisco.com/c/en/us/products/collateral/cloud-systems-management/smart-software-manager-satellite/datasheet-c78-734539.html): es una solución de gestión de licencias para productos Cisco que permite a las organizaciones administrar, rastrear y controlar sus licencias y suscripciones de software de Cisco de manera local, sin depender de la nube.

### [Interfaz de Linea de Comando](https://aws.amazon.com/es/what-is/cli/) (CLI) :

Ambos servidores contaban con su interfaz gráfica ([GUI](https://es.wikipedia.org/wiki/Interfaz_gr%C3%A1fica_de_usuario)) para la administración del día al día de los mismos.
Pero en el *85%* de los casos, para solucionar el problema que estuviera enfrentando el cliente había que adentrarse a la [Interfaz de Linea de Comando](https://aws.amazon.com/es/what-is/cli/).

![[cli vs gui.png | CLI vs GUI]] [^Imagen]

[^Imagen]: En esta imagen podemos ver un Interfaz Gráfica (GUI) al lado izquierdo, en la cual podemos interactuar utilizando nuestro mouse, donde podemos ver iconos en los que podemos clicar, arrastrarlos y realizar las tareas a las que estamos acostumbrados. A la izquierda tenemos una Interfaz de Linea de Comandos (CLI), donde únicamente podemos realizar acciones, escribiendo los comandos necesario con nuestro teclado.

Para los que no esté familiarizados con este termino la [Interfaz de Linea de Comando](https://aws.amazon.com/es/what-is/cli/) o CLI, por sus siglas en inglés, es un programa se utiliza para interactuar con el sistema operativo mediante el teclado.

En sus principios solo permitía el uso del teclado y el mouse no interactuaba con este, e igualmente, la idea es utilizar *únicamente el teclado* para ser más eficientes, ya que todo está al alcance de tus dedos sin tener que estar moviendo la muñeca o la mano.

Esto fue algo que me disgusto al principio, ya que a pesar de que me consideraba en su momento, me consideraba una persona muy afín a las computadoras y tecnología en general, ese texto blanco o verde con un fondo negro me parecía cosa de hackers o salido e la película [Matrix](https://es.wikipedia.org/wiki/Matrix), algo que un usuario regular (como yo) no debía utilizar.

Pero estamos hablando que yo ya estaba en un contexto laboral, dentro de una empresa de tecnología como lo es Cisco, yo ya poseía conocimientos previos de como utilizar un CLI, más que todo por que los dispositivos Cisco (como Routes y Switches) utilizan el [Cisco IOS CLI](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/15mt/fundamentals-15-mt-book/cf-cli-basics.html), y aun así el CLI de Linux me parecía abrumador con la cantidad de opciones, comandos, configuraciones, servicios con los que se puede interactuar.

Con forme iba avanzando mi entrenamiento en Linux dentro de Cisco, me iba dando cuenta que **literalmente todo** se puede realizar desde la Linea de comandos, aun hasta lo que realizamos en el día a día en nuestras aplicaciones con interfaces gráficas, por detrás siguen realizando llamadas a estas funciones que podemos realizar nosotros mismos desde el CLI; algo que me parece fascinante, ya que esto significa que puedo administrar y utilizar todo mi sistema desde un solo lugar sin que mis manos tengan que abandonar mi teclado. (Con aún más importancia que este iba a ser mi trabajo 5 día a la semana).

Pero hasta este punto solo había tenido una "relación laboral" laboral con Linux, pero me fui interesando cada vez más en el mundo del [Código Abierto](https://es.wikipedia.org/wiki/C%C3%B3digo_abierto) y la privacidad, que me llevaron a...

## Instalar Linux en mi casa

Empecé por probar Linux en maquinas virtuales dentro de [Virtual Box](https://www.virtualbox.org/) corriendo en mi [[pc| mi computadora personal]], pero no fue una experiencia 

---

%% #### [[Siguiente Nota]]  %%
#### [[Viaje en Linux/Diario/index | ↩️ Regresar al Indice del Diario ]]