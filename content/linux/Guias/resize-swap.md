---
title: ¿Cómo Redimensionar la Memoria Swap en Ubuntu Linux? 24.04
draft: false
---

La última version de [Ubuntu](https://ubuntu.com/) ahora utilizan un [archivo swap](https://help.ubuntu.com/community/SwapFaq) en lugar de una partición dedicada.
Este archivo swap no es nada más que un archivo con extensión .img que se encuentra en el directorio raíz `/` el cual comparte la carga con la memoria RAM.

Una de las grandes ventajas de este cambio es que se puede redimensionar de manera muy sencilla. Lo cual no siempre es el caso cuando se utiliza una partición dedicada al swap.

## Redimensionar el tamaño de la memoria Swap en Ubuntu

>[!warning] Leer antes de continuar
>Está [[linux/Guias/index|guía]] asume que usted está utilizando un archivo swap en sus sistema, no una partición dedicada a swap.

### Paso 1: Verificar que haya un archivo swap en el sistema

```bash
swapon --show
```

Este comando mostrará el swap actualmente disponible. Si aparece el tipo `file`, significa que usted está utilizando un archivo swap.

```bash title="Ejemplo" /file/ /TYPE/
swapon --show
NAME      TYPE SIZE USED PRIO
/swap.img file   2G   0B   -2
```

>[!tip]
>Puede abrir su Terminal rápidamente utilizando el atajo `CTRL + ALT + T` en el teclado.

### Paso 2: Desactivar el archivo swap

Puede desactivar un archivo swap utilizando este comando. El comando no mostrara ninguna salida en la terminal y puede tardar unos minutos.

```bash
sudo swapoff /swap.img
```

### Paso 3: Asignar el espacio deseado al archivo swap

Utilizando el comando `fallocate` puede cambiar el tamaño del archivo swap.
*Ingrese la cantidad que desea asignar en gigas por ejemplo `4G`*

```bash /4G/
sudo fallocate -l 4G /swap.img
```

### Paso 4: Marcar el archivo como un archivo swap

```bash
sudo mkswap /swap.img
```

Debería de ver una salida como la siguiente en donde le advierte que la vieja firma swap esta siendo eliminada

```bash title="Ejemplo" {2-4}
sudo mkswap /swap.img
mkswap: /swap.img: warning: wiping old swap signature.
Setting up swapspace version 1, size = 4 GiB (4294967296 bytes)
no label, UUID=c50b27b0-a530-4dd0-9377-aa28eabf3957
```

### Paso 5: Activar el archivo swap

Una vez completados los pasos anteriores puede volver a activar el archivo swap con el siguiente comando:

```bash
sudo swapon /swap.img
```

---

Eso sería todo el proceso. Usted acaba de aumentar el tamaño de su swap en Ubuntu de 2GB a 4GB (o la cantidad que usted haya seleccionado). Ahora solo falta revisar el tamaño del archivo usando el comando `swapon --show` o el comando `free -h`.

```bash title="Ejemplo swapon"

swapon --show
NAME      TYPE SIZE USED PRIO
/swap.img file   4G   0B   -2

```
```bash title="Ejemplo free"
free -h
              total        used        free      shared  buff/cache   available
Mem:           7.7G        873M        5.8G        265M        1.0G        6.3G
Swap:          4.0G          0B        4.0G
```