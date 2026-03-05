import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button
} from "@mui/material";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  borderRadius: 2,
  p: 4,
};

function Calendar() {
  const [events, setEvents] = useState([
    { id: 1, title: "회의", date: "2026-03-10" },
    { id: 2, title: "휴가", date: "2026-03-15" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [titleInput, setTitleInput] = useState("");

  const handleDateClick = (info) => {
    const existingEvent = events.find(event => event.date === info.dateStr);
    setSelectedDate(info.dateStr);

    if (existingEvent) {
      setSelectedEvent(existingEvent);
      setTitleInput(existingEvent.title);
    } else {
      setSelectedEvent(null);
      setTitleInput("");
    }

    setModalOpen(true);
  };

  const handleSave = () => {
    if (!titleInput.trim()) return alert("제목을 입력하세요.");

    if (selectedEvent) {
      // 수정
      setEvents(events.map(event =>
        event.id === selectedEvent.id ? { ...event, title: titleInput } : event
      ));
    } else {
      // 새 이벤트 추가
      const newEvent = {
        id: events.length + 1,
        title: titleInput,
        date: selectedDate
      };
      setEvents([...events, newEvent]);
    }

    setModalOpen(false);
  };

  const handleDelete = () => {
    if (selectedEvent) {
      setEvents(events.filter(event => event.id !== selectedEvent.id));
      setModalOpen(false);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick} // 날짜 클릭 이벤트
      />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" mb={2}>
            {selectedEvent ? "이벤트 수정" : "새 이벤트 추가"}
          </Typography>
          <TextField
            fullWidth
            label="제목"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" onClick={handleSave}>
              저장
            </Button>
            {selectedEvent && (
              <Button variant="contained" color="error" onClick={handleDelete}>
                삭제
              </Button>
            )}
            <Button variant="outlined" onClick={() => setModalOpen(false)}>
              취소
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Calendar;