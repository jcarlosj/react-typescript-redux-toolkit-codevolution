# React (TypeScript): React-Redux & Redux Toolkit
Los siguientes ejemplos se implementan sobre React con TypeScript usando React-Redux y Redux-Toolkit.
 - Tienda de pasteles y helados.
 - Obtener datos de una API a través procesos asíncronos.

NOTA: El anterior proyecto fue desarrollado en React, [en este repositorio](https://github.com/jcarlosj/react-redux-toolkit-codevolution), usando TypeScript, para explicar el detalle de los conceptos detrás de React con TypeScript (cambio de extensiones de archivo, implementación del tipado de datos, configuración de hooks para gestionar el Redux Store usando Redux Toolkit).

## Tienda de pasteles y helados
Tomamos el primero de los ejemplos del mundo real, una tienda de pasteles y helados. Identificamos las diferentes partes involucradas y las actividades que realizan

|   Entidades   |   Actividades |
|:---|:---|
|   <ul><li>**Tienda** - Almacena pasteles en un estante</li><li>**Tenderos** - Detrás del mostrador</li><li>**Cliente** - En la entrada de la tienda</li></ul>| <ul><li>**Cliente** - Pide un pastel y/o un helado (usando un QR)</li><li>**Tendero 1**</li><ul><li>Empaca un pastel del mostrador</li><li>Entrega recibo (registro de la compra)</li></ul><li>**Tendero 2**</li><ul><li>Despacha un helado del congelador</li><li>Entrega recibo (registro de la compra)</li></ul></ul> |

### Identificar: actions, reducers y store
Dentro del escenario de la pasteleria en el mundo real identificar los donde se aplican los 3 conceptos fundamentales de redux: *actions*, *reducers*, *store*.

| Escenario de pastelería | Concepto en Redux | Propósito |
|:---|:---|:--- |
| **Tienda** | *store* | Mantiene el estado de su aplicación |
| **Pastel ordenado** | *action* | Describe lo que pasó |
| **Helado ordenado** | *action* | Describe lo que pasó |
| **Tendero 1** | *reducer* | Une la tienda y las acciones |
| **Tendero 2** | *reducer* | Une la tienda y las acciones |

### Aplicación: Tienda de pasteles y helados
Con el propósito de facilitar el aprendizaje de Redux la aplicación implementará Redux dentro de un entorno basado en Node, dentro del siguiente escenario.

#### Venta de pasteles
- Tortas almacenadas en el estante
- **Tendero 1** maneja la orden del cliente *CAKE_ORDERED*

#### Venta de helados
- Helados almacenados en el congelador
- **Tendero 2** maneja la orden del cliente *ICREAM_ORDERED*

#### Gestión de la tienda
El estado de la tienda ahora es el número de pasteles en el estante junto con el número de helados en el congelador.

- Los tenderos separados ayudan con la escalabilidad.
- Los comerciantes separados ayudan a reducir un problema cuando surge uno

### Variaciones al modelo inicial: 
#### Venta de pasteles
- Tortas almacenadas en el estante
- **Tendero 1** maneja la orden del cliente *CAKE_ORDERED* sin embargo de ahora en adelante todo pastel se servirá con una porción de helado. Al ordenar un pastel, también se hará automáticamente una orden de helado.

# Scripts disponibles
Los proyectos ejemplificados aqui se pueden desplegar usando los siguientes comandos
### `npm i`
Primero debe instalar las dependencias requeridas

### `npm run dev`
Lanzar el proyecto React/TypeScript usando React-Redux & Redux Toolkit
