
export function createEventElement(event) {
  const eventContainer = document.createElement("div");
  eventContainer.classList.add("second_container");
  eventContainer.dataset.id = event.id;


  if (event.location) {

    eventContainer.addEventListener("click", function () {

      const mapLink = event.location;
      const mapIframe = document.createElement("iframe");
      mapIframe.classList.add("second-right_ifame");
      mapIframe.src = mapLink;
      mapIframe.width = "339";
      mapIframe.height = "276";
      mapIframe.style.border = "0";
      mapIframe.allowfullscreen = "";
      mapIframe.loading = "lazy";
      mapIframe.referrerpolicy = "no-referrer-when-downgrade";

      const mapContainer = document.querySelector(".second-right-img");

      mapContainer.innerHTML = "";

      mapContainer.appendChild(mapIframe);

      const browseButton = document.querySelector(".second-right-btn");
      const closeButton = document.querySelector(".second-right-close-btn");
      const blurImage = document.querySelector(".second-right_ifame");
      blurImage.style.filter = "none";
      mapContainer.appendChild(browseButton);
      mapContainer.appendChild(closeButton);
    });
  }

  eventContainer.addEventListener("dblclick", function () {
    window.location.href = event.website;
  });

  const eventImageContainer = document.createElement("div");
  eventImageContainer.classList.add("event_grid-main-img");

  const imageElement = document.createElement("img");
  imageElement.classList.add("cont_grig-img");
  imageElement.src = event.image;
  imageElement.alt = "";

  eventImageContainer.appendChild(imageElement);

  if (event.type === "online") {
    const eventAbsolutBox = document.createElement("div");
    eventAbsolutBox.classList.add("event_grid-absolut-box");

    const onlineEventIcon = document.createElement("img");
    onlineEventIcon.src = "./icons/Online Event.svg";
    onlineEventIcon.alt = "";

    eventAbsolutBox.appendChild(onlineEventIcon);
    eventImageContainer.appendChild(eventAbsolutBox);
  }

  const eventTextContainer = document.createElement("div");
  eventTextContainer.classList.add("second_container-text");

  const eventText1Container = document.createElement("div");
  eventText1Container.classList.add("second_container-text-1");

  const dateParagraph = document.createElement("p");
  dateParagraph.classList.add("small-up", "small-up-plus");
  const formattedDate = event.date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  });
  dateParagraph.textContent = formattedDate;

  const titleHeading = document.createElement("h3");
  titleHeading.textContent = event.title;

  const categoryParagraph = document.createElement("p");
  categoryParagraph.classList.add("small-p");
  categoryParagraph.innerHTML = `${event.category} <span class="small-p-span">(${event.distance} km)</span>`;

  const secTextOnlineContainer = document.createElement("div");
  secTextOnlineContainer.classList.add("sec_text-online");

  const onlineEventIcon = document.createElement("img");
  onlineEventIcon.src = "./icons/SVG51.svg";
  onlineEventIcon.alt = "";

  const onlineEventParagraph = document.createElement("p");
  onlineEventParagraph.textContent =
    event.type === "Online" ? "Online Event" : "Online Event";

  if (event.type === "offline") {
    secTextOnlineContainer.style.display = "none";
  }

  secTextOnlineContainer.appendChild(onlineEventIcon);
  secTextOnlineContainer.appendChild(onlineEventParagraph);

  eventText1Container.appendChild(dateParagraph);
  eventText1Container.appendChild(titleHeading);
  eventText1Container.appendChild(categoryParagraph);
  eventText1Container.appendChild(secTextOnlineContainer);

  const attendeesContainer = document.createElement("div");
  attendeesContainer.classList.add("event_grid-text-attendes");

  const attendeesParagraph = document.createElement("p");
  attendeesParagraph.classList.add("small-p", "small-p-new");
  attendeesParagraph.textContent = event.attendees
    ? event.attendees + " attendees"
    : "";

  const attendeesIcon = document.createElement("img");
  attendeesIcon.src = "./icons/VectorAttendes.svg";
  attendeesIcon.alt = "";

  attendeesContainer.appendChild(attendeesParagraph);
  attendeesContainer.appendChild(attendeesIcon);

  eventText1Container.appendChild(attendeesContainer);

  if (!event.attendees) {
    attendeesContainer.style.display = "none";
  }

  eventTextContainer.appendChild(eventText1Container);

  eventContainer.appendChild(eventImageContainer);
  eventContainer.appendChild(eventTextContainer);

  return eventContainer;
}
