// Exercise 1
const getMultiplyBoard = number => {
  console.log('In bang nhan:')
  // console.log('<br />')

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x + ${i} = ${number * i}`)
    // console.log('<br />')
  }
}

// Exercise 2
const getEvenNumber = n => {
  if ((n < 1 || n > 30 ) && typeof (n) != integer) {
    console.log('Number invalid')
  }

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}


// Exercise 3
const getsum = n => {
  if ((n < 1 || n > 30 ) && typeof (n) != integer) {
    console.log('Number invalid')
  }

  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  console.log(sum)
}

// Exercise 4
const getFactorialNumber = n => {
  if ((n < 1 || n > 30 ) && typeof (n) != integer) {
    console.log('Number invalid')
  }

  let factorial = 1
  for (let i = 1; i <= n; i++) {
    factorial *= i
  }
  console.log(factorial)
}

// Exercise 5
const countEvenNumber = params => {
  let evenNumber = 0
  for (let i = 0; i <= params.length; i++) {
    if (params[i] % 2 === 0) {
      evenNumber += 1
    }
  }
  console.log(evenNumber)
}

// Exercise 6
const deleteDuplicates = params => {
  let paramElement
  for (let i = 0; i <= params.length; i++) {
    paramElement = params[i]
    for (let j = 0; j <= params.length; j++) {
      if (paramElement === params[j] && j != i) {
        params.splice(j, 1) //Delete params duplicate elements
      }
    }
  }
  console.log(params)
}

// Exercise 7
function makeStudentsObject() {
  const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' }
  ]
  const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 }
  ]

  const students = []

  studentNames.forEach(studentName => {
    const student = {
      id: studentName.id,
      name: studentName.name
    }
    studentScores.forEach (studentScore => {
      if (studentScore.id === studentName.id) {
        student['score'] = studentScore.score
      }
    })
    students.push(student)
  })
  return students
}

// Exercise 8
const getBestAndWorstStudents = () => {
  const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
  ]

  let best_score = students[0].score
  let worst_score = students[0].score
  let theBest
  let theBad

  students.forEach(student => {
    if (student.score > best_score) {
      best_score = student.score
    }
    if (student.score < worst_score) {
      worst_score = student.score
    }
  })
  return {
    theBest: students.find(student => student.score === best_score),
    theBad: students.find(student => student.score === worst_score)
  }
}
