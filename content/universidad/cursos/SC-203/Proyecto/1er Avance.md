> [!danger]+ **Caso**
> La compañía FALA, S.A. ha sufrido algunos ataques cibernéticos que los ha dejado fuera de servicio en tres ocasiones por bloqueo de sus tarjetas de red y por destrucción de los datos en sus servidores. Se le ha solicitado su colaboración para realizar un análisis de situación actual de sus políticas de seguridad informática para sus servidores Linux. Usted ha decidido que esta solución debe ser desarrollada e implementada desde servidores Linux.
> Se le ha solicitado a su grupo de trabajo la elaboración de la metodología de análisis de riesgos, la ejecución del análisis y la implementación de la(s) herramienta(s) para gestionar este análisis. Adicionalmente debe prepara una demostración en la fecha acordada.

> [!note]+ **Requerimientos del Proyecto**
> - [ ] El sistema operativo a utilizar debe ser Ubuntu Server.
> - [ ] Debe crear un servidor Ubuntu Server que será el objetivo de las pruebas y el análisis.
> - [ ] Cuentas y grupos de usuario.
> - [ ] Permisos y atributos de directorios.
> - [ ] Dispositivos de almacenamiento.
> - [ ] Examinar los procesos en ejecución e identificar posibles riesgos.
> - [ ] Mantener su servidor Linux up-to-date con la herramientas de gestión de software de Debian.
> - [ ] Automatizar la seguridad del sistema 24/7 mediante el uso de scripts


## Servidores
|                       |          Master           |          Slave-1          |          Slave-2          | Total  |
|:---------------------:|:-------------------------:|:-------------------------:|:-------------------------:|:------:|
|    **Procesador**     |          2vCPUs           |           1vCPU           |           1vCPU           | 4vCPUs |
|      **Memoria**      |            4GB            |            2GB            |            2GB            |  8GB   |
| Sistema **Operativo** | Ubuntu Server 24.04.1 LTS | Ubuntu Server 24.04.1 LTS | Ubuntu Server 24.04.1 LTS |        |


## Herramientas a utilizar

### OpenSSH
OpenSSH es esencial para administrar servidores de manera remota y segura usando el protocolo SSH, que cifra la comunicación entre el cliente y el servidor. Esto es fundamental en nuestra configuración porque permite realizar tareas administrativas, gestionar usuarios y automatizar la seguridad desde una ubicación central sin comprometer la integridad de los datos transmitidos. Además, con OpenSSH podemos configurar **autenticación con claves SSH**, lo que mejora la seguridad al eliminar la necesidad de contraseñas y facilita la gestión remota de múltiples servidores de forma eficiente y segura.
- [**Documentación 📝**](https://www.openssh.com/manual.html)

### Opción 1 - Cockpit

Es una herramienta de administración gráfica para servidores Linux que nos permitirá gestionar varias de las necesidades de nuestros requerimientos:

- **Cuentas y grupos de usuario**: Cockpit tiene una sección dedicada a la administración de usuarios y grupos, facilitando la creación y modificación de cuentas.
- **Permisos y atributos de directorios**: Puedes gestionar permisos a través de su terminal integrada o usando herramientas gráficas de terceros.
- **Dispositivos de almacenamiento**: Cockpit ofrece un panel gráfico que muestra el estado de los dispositivos de almacenamiento, particiones y volúmenes.
- **Procesos en ejecución y riesgos**: Te permite observar procesos en tiempo real y terminar aquellos que consideres riesgosos.
- **Actualización de software**: Cockpit incluye una sección para gestionar actualizaciones de software, permitiendo mantener el servidor Debian actualizado.
- **Automatización**: Puedes configurar scripts personalizados para automatizar tareas de seguridad y gestión del servidor.

**Pros 👍**

- Fácil de usar y configurar.
- Interface gráfica limpia y accesible desde el navegador.
- Soporte para múltiples servidores.

**Contras 👎**

- No es tan avanzado como herramientas de monitoreo específicas

[**Documentación 📝**](https://cockpit-project.org/documentation.html)

### Opción 2 - Webmin

Webmin es una herramienta gratuita basada en la web que te permite gestionar servidores Linux. Es altamente flexible y personalizable, lo que lo hace una buena opción para una gestión centralizada.

- **Cuentas y grupos de usuario**: Webmin tiene un módulo que te permite crear y gestionar cuentas de usuario y grupos.
- **Permisos y atributos de directorios**: Puedes gestionar permisos de archivos y directorios desde su interfaz gráfica.
- **Dispositivos de almacenamiento**: Ofrece visualización y gestión de almacenamiento, particiones y sistemas de archivos.
- **Procesos y riesgos**: Tiene un módulo de "System Processes" para ver y gestionar procesos activos.
- **Actualizaciones**: Webmin tiene un módulo para gestionar paquetes y actualizaciones en distribuciones basadas en Debian.
- **Automatización**: Puedes crear scripts personalizados y configurarlos para que se ejecuten automáticamente utilizando el programador de tareas integrado (cron).

**Pros 👍**

- Amplia funcionalidad de administración desde la web.
- Extensible mediante módulos.
- Comunidad activa de soporte.

**Contras 👎**

- La interfaz puede no ser tan intuitiva como otras opciones más modernas.

[**Documentación 📝**](https://webmin.com/docs/)


## Tareas

###  1- Crear maquinas virtuales
Crear las 3 maquinas virtuales según la [[#Servidores| Tabla de Especificaciones]] en el programa [VirtualBox de Oracle](https://www.virtualbox.org/)

### 2- Instalar Sistemas Operativos
Instalar las imágenes de **Ubuntu Server 24.04.1 LTS** en cada uno de los servidores creados en VirtualBox

### 3- Configurar OpenSSH en los servidores
Se puede configurar utilizando un *Usuario y Contraseña* para la configuración del sistema, pero después migrar a **autenticación con claves SSH** en el futuro para aumentar el nivel de seguridad.

### 4- Instalar  *Cockpit* en cada uno de los servidores

#### Pasos para instalar Cockpit
1. **Actualizar los paquetes instalados:**
	```bash
	sudo apt-get upgrade && sudo apt-get update
	```
2. **Descargar el paquete `cockpit`**
	```bash
	sudo apt-get install cockpit -y
	```
3. **Habilitar e Iniciar el servicio `cockpit.sockt`**
	```bash
	sudo systemctl enable --now cockpit.socket
	```
4. **Crear un Usuario exclusivo para el uso de Cockpit**
   Por cuestiones de seguridad y monitoreo es mejor utilizar un usuario exclusivamente para el uso de Cockpit, que utilizar usuarios previamente creados
   ```bash
   useradd -m cockpit-user
   ```
5. **Asignar una contraseña al Usuario de Cockpit**
   Estas credenciales deben ser segura **- preferiblemente creada por un gestor de contraseñas-**, y administradas bajo el estándard [ISO/IEC 27001:2022](https://www.iso.org/standard/27001) para asegurar la seguridad de las mimas.
   ```bash
   passwd cockpit-user
   ```
   A continuación te pedirá que ingreses una contraseña para el usuario.
   
> [!important] Nota
> Estás credenciales se pueden cambiar por **autenticación con claves SSH** para reforsar las medidas de seguridad del usuario

> [!NOTE]  Nota
> El Dashboard de Cockpit por defecto es accesible en el puerto `9090` del protocolo `HTTPS`
> 	Se puede accesar con el url **https://{Server}:9090** donde `{Server}` es la IP del servidor
