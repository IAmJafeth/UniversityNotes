---
title: ¿Cómo Redimensionar la Memoria Swap en Ubuntu Linux? 24.04
draft: true
---

La última version de [Ubuntu](https://ubuntu.com/) ahora utilizan un [archivo swap](https://help.ubuntu.com/community/SwapFaq) en lugar de una partición dedicada.
Este archivo swap no es nada más que un archivo con extensión .[[iso]] que se encuentra en el directorio raíz `/` el cual comparte la carga con la memoria RAM.

Una de las grandes ventajas de este cambio es que se puede redimensionar de manera muy sencilla. Lo cual no siempre es el caso cuando se utiliza una partición dedicada al swap.

## Redimensionar el tamaño de la memoria Swap en Ubuntu

>[!warning] Leer antes de continuar
>Está guía asume que usted está utilizando un archivo swap en sus sistema, no una partición dedicada a swap

### Paso 1: Verificar que haya un archivo swap en el sistema

```bash
swapon --show
```

Este comando mostrará el swap actualmente disponible. Si aparece el tipo `file`, significa que usted está utilizando un archivo swap.

```bash title="Ejemplo" {3}
swapon --show
NAME      TYPE SIZE USED PRIO
/swapfile file   2G   0B   -2
```

>[!tip]
>Puedes abrir tu Terminal rápidamente utilizando el atajo `CTRL + ALT + T` en el teclado

### Paso 2: Desactivar el archivo swap
