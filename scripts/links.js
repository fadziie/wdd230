const baseURL = "https://fadziie.github.io/wdd230/";
const linksURL = './data/links.json';

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayLinks(data.lessons);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

function displayLinks(lessons) {
  const container = document.querySelector('.lesson-links-container'); // Assuming you have a container for the links
  lessons.forEach(lesson => {
    const lessonElement = document.createElement('div');
    lessonElement.innerHTML = `<h3>Lesson ${lesson.lesson}</h3>`;
    const list = document.createElement('ul');
    lesson.links.forEach(link => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="${link.url}">${link.title}</a>`;
      list.appendChild(listItem);
    });
    lessonElement.appendChild(list);
    container.appendChild(lessonElement);
  });
}

document.addEventListener('DOMContentLoaded', getLinks);