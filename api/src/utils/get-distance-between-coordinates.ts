export interface Coordinate {
  latitude: number
  longitude: number
}

export function getDistanceBetweenCoordinates(
  from: Coordinate,
  to: Coordinate,
) {
  if (from.latitude === to.latitude && from.longitude === to.longitude) {
    return 0
  }

  const fromRadian = (Math.PI * from.latitude) / 180
  const toRadian = (Math.PI * to.latitude) / 180

  const theta = from.longitude - to.longitude
  const radTheta = (Math.PI * theta) / 180

  let dist =
    Math.sin(fromRadian) * Math.sin(toRadian) +
    Math.cos(fromRadian) * Math.cos(toRadian) * Math.cos(radTheta)

  if (dist > 1) {
    dist = 1
  }

  dist = Math.acos(dist)
  dist = (dist * 180) / Math.PI
  dist = dist * 60 * 1.1515
  dist = dist * 1.609344

  return dist
}

/*
  ###############################################
  #                                             #
  #  Explanation:                               #
  #                                             #
  #  First, the function checks if the two       #
  #  coordinates are equal and returns 0 in      #
  #  that case, indicating that the distance     #
  #  between them is zero.                       #
  #                                             #
  #  Next, the function converts the coordinates #
  #  from degrees to radians and calculates the  #
  #  difference in longitude between the two     #
  #  coordinates. The Haversine formula is used  #
  #  to calculate the distance between the two   #
  #  points. This formula employs the law of      #
  #  cosines to determine the distance between   #
  #  two points on a sphere, such as the Earth.   #
  #                                             #
  #  The distance is then converted to miles     #
  #  and subsequently to kilometers, and the     #
  #  result is returned as a floating-point      #
  #  number representing the distance in         #
  #  kilometers between the two coordinates.     #
  #                                             #
  ###############################################
*/
/*
  ###############################################
  #                                             #
  #  Explicação:                                #
  #                                             #
  #  Primeiro, a função verifica se as duas      #
  #  coordenadas são iguais e retorna 0 caso     #
  #  sejam, indicando que a distância entre      #
  #  elas é zero.                               #
  #                                             #
  #  Em seguida, a função converte as coordenadas#
  #  de graus para radianos e calcula a          #
  #  diferença de longitude entre as duas        #
  #  coordenadas. A fórmula de Haversine é       #
  #  utilizada para calcular a distância entre   #
  #  os dois pontos. Essa fórmula emprega a lei  #
  #  dos cossenos para calcular a distância      #
  #  entre dois pontos em uma esfera, como a     #
  #  Terra.                                      #
  #                                             #
  #  A distância é então convertida em milhas    #
  #  e subsequentemente em quilômetros, e o      #
  #  resultado é retornado como um número de     #
  #  ponto flutuante representando a distância   #
  #  em quilômetros entre as duas coordenadas.   #
  #                                             #
  ###############################################
*/
