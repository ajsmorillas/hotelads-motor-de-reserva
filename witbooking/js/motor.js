function submitForm() {
    var form = document.querySelector(".reservation-form");
    var datein = document.getElementById("datein").value;
    var dateout = document.getElementById("dateout").value;
    var habitacion = document.getElementById("habitacion").value;
    var adultos = document.getElementById("adultos").value;
    var ninos = document.getElementById("ninos").value;
    var url = "https://example.com/reservar";
    url += "?affiliate=" + encodeURIComponet(affiliate);
    url += "&datein=" + encodeURIComponent(datein);
    url += "&dateout=" + encodeURIComponent(dateout);
    url += "&habitacion=" + encodeURIComponent(habitacion);
    url += "&adultos=" + encodeURIComponent(adultos);
    url += "&ninos=" + encodeURIComponent(ninos);
    form.action = url;
    form.submit();
  }
  
  flatpickr("#rango-fechas", {
    altInput: true,
    altFormat: "d-m-Y",
    dateFormat: "d-m-Y",
    minDate: "today",
    mode: "range",
    onClose: function (selectedDates, dateStr, instance) {
      if (selectedDates.length > 0) {
        var rangoFechas = document.getElementById("rango-fechas")._flatpickr;
        rangoFechas.set("maxDate", selectedDates[0].fp_incr(30));
        var datein = document.getElementById("datein");
        var dateout = document.getElementById("dateout");
        datein.value = selectedDates[0]
          .toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, "-");
        dateout.value = selectedDates[1]
          .toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, "-");
      }
    },
    onValueUpdate: function (selectedDates, dateStr, instance) {
      var datein = document.getElementById("datein");
      var dateout = document.getElementById("dateout");
      if (selectedDates.length == 1) {
        datein.value = selectedDates[0]
          .toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, "-");
        dateout.value = "";
      } else if (selectedDates.length == 2) {
        datein.value = selectedDates[0]
          .toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, "-");
        dateout.value = selectedDates[1]
          .toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, "-");
      } else {
        datein.value = "";
        dateout.value = "";
      }
    },
  });
  
  flatpickr("#datein", {
    altInput: true,
    altFormat: "d-m-Y",
    dateFormat: "d-m-Y",
    minDate: "today",
    onClose: function (selectedDates, dateStr, instance) {
      if (selectedDates.length > 0) {
        var checkOut = document.getElementById("dateout")._flatpickr;
        checkOut.set("minDate", selectedDates[0].fp_incr(1));
        checkOut.open();
      }
    },
  });
  
  flatpickr("#dateout", {
    altInput: true,
    altFormat: "d-m-Y",
    dateFormat: "d-m-Y",
    minDate: "today",
  });
  