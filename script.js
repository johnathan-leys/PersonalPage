document.addEventListener('DOMContentLoaded', function() {
    var lastUpdated = new Date(document.lastModified);
    var formattedDate = lastUpdated.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    document.getElementById('updateDate').textContent = formattedDate;
  });